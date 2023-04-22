import { computed, defineComponent, nextTick, ref, shallowReactive } from 'vue'
import { SelectProps, selectProps, OnUpdateInputValueFn, RenderTriggerFn, SelectValueGather, SelectValue } from './props'
import Overlay, { OverlayInstance } from '../../overlay'
import Input, { InputInstance } from '../../input'
import Options from "./options"
import Icon from "../../icon"
import Tag from "../../tag"

import { useMergeProps } from '@useful-ui/hooks'
import { ArrowDown } from "@useful-ui/icons"

import {
  isArray,
  isNumber,
  createNameSpace,
  createComponentName,
  getBoundingClientRect
} from '@useful-ui/utils'

const defaultProps: SelectProps = {
  options: [],
  disabled: false,
  multiple: false,
  placeholder: ''
}

const bem = createNameSpace('select')

const Select = defineComponent({
  name: createComponentName('Select'),
  props: selectProps,
  setup(componentProps) {
    const props = useMergeProps(componentProps, defaultProps)
    const overlayRef = ref<OverlayInstance | null>(null)

    const state = computed(() => {
      const { disabled, placeholder, multiple } = props.value
      return ({
        disabled,
        placeholder,
        trigger: multiple ? 'click' : 'focus'
      }) as const
    })

    const inputState = shallowReactive({
      height: 0,
      width: 0,
      value: ""
    })

    const active = computed(() => {
      const { options, value } = props.value
      if (!isArray(value))return options?.find(({ value: _value }) => value === _value)
      return options?.filter(({ value: _value }) => value.includes(_value))
    })

    const calculateOptionWidth = function() {
      if (!overlayRef.value) return 0
      const { getTrigger } = overlayRef.value
      const rect = getBoundingClientRect(getTrigger()?.$el || 0)
      inputState.width = isNumber(rect) ? rect : rect.width
    }

    const getUpdateValue = function(originalValue: SelectValueGather, options){
      if (!isArray(originalValue)) return options.value;
      const isDeletion = options.isDeletion || originalValue.includes(options.value)
      if (isDeletion) return originalValue.filter(value => value !== options.value) 
      return [...originalValue, options.value]
    }

    const onUpdateValue: OnUpdateInputValueFn = function({ isDeletion, value }) {
      const { "onUpdate:value": onUpdateValue, value: originalValue } = props.value
      const updateValue = getUpdateValue(originalValue as SelectValueGather, { isDeletion, value })
      onUpdateValue && onUpdateValue(updateValue)
      nextTick(() => overlayRef.value?.updateOverlayPosition())
    }

    function focus() {
      const input = overlayRef.value?.getTrigger<InputInstance>()
      input?.focus()
    }

    function blur(){
      const input = overlayRef.value?.getTrigger<InputInstance>()
      input?.blur()
    }

    function onCloseTag(event?:MouseEvent,value?:SelectValue){
      event?.stopPropagation()
      onUpdateValue({ value, isDeletion: true })
    }

    const renderTags: RenderTriggerFn = function()  {
      const { multiple, size } = props.value
      if (!multiple || !isArray(active.value)) return null   
      return (
        <div class={bem.e('tags')}>
          {active.value.map(({ label, value }) => (
              <Tag
                closable
                size={size}
                key={value}
                v-slots={{ default: () => label }}
                onClose={(event) => onCloseTag(event,value)}
              />
            ))}
        </div>
      )
    }

    const renderTrigger: RenderTriggerFn = function(config) {
      const { size, multiple } = props.value
      const value = !isArray(active.value) ? active.value?.label : active.value.join(',')
      const hasInnerInput = config.hasInnerInput || false
      const isRenderTag = multiple && isArray(active.value) && config.hasInnerInput

      return (
        <Input
          class={bem.is('inner', !hasInnerInput)}
          inputStyle={value && isRenderTag ? {height:'100% !important'} : {}}
          placeholder={state.value.placeholder}
          disabled={state.value.disabled}
          readonly={config.hasInnerInput}
          value={value}
          size={size}
          renderTag={
            isRenderTag
              ? () => renderTags({ hasInnerInput: false })
              : undefined
          }
          v-slots={{
            suffix: hasInnerInput
              ? () => (<Icon><ArrowDown /></Icon>)
              : null
          }}
        />
      )
    }

    return () => {
      const { value, multiple, options } = props.value
      const { trigger } = state.value
      return (
        <div class={bem.b()}>
          <Overlay
            ref={overlayRef}
            trigger={trigger}
            onHidden={blur}
            onVisible={calculateOptionWidth}
            v-slots={{
              trigger: () => renderTrigger({ hasInnerInput: true }),
              default: () => (
                <Options
                  value={value}
                  focus={focus}
                  options={options}
                  multiple={multiple}
                  width={inputState.width}
                  onUpdateValue={onUpdateValue}
                />
              )
            }}
          />
        </div >
      )
    }
  }
})

export default Select
