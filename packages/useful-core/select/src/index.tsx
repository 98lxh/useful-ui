import { computed, defineComponent, nextTick, ref, shallowReactive } from 'vue'
import Overlay, { OverlayInstance } from '../../overlay'
import Input, { InputInstance } from '../../input'
import { Operators } from '../../_tokens'
import { selectProps } from './props'
import Options from "./options"
import Icon from "../../icon"
import Tag from "../../tag"

import { useMergeProps } from '@useful-ui/hooks'
import { ArrowDown } from "@useful-ui/icons"

import type {
  SelectProps,
  SelectValue,
  SelectOption,
  RenderTriggerFn,
  SelectSingleValue,
  OnUpdateInputValueFn
} from "./props"

import {
  isArray,
  isNumber,
  createNameSpace,
  createComponentName,
  getBoundingClientRect
} from '@useful-ui/utils'

const defaultProps: SelectProps = {
  options: [],
  placeholder: '',
  disabled: false,
  multiple: false,
}

const nsp = createNameSpace('select')

const Select = defineComponent({
  name: createComponentName('Select'),
  props: selectProps,
  setup(componentProps) {
    const props = useMergeProps(componentProps, defaultProps)
    const overlayRef = ref<OverlayInstance | null>(null)

    const state = computed(() => ({
      disabled: props.value.disabled,
      placeholder: props.value.placeholder,
      trigger: props.value.multiple ? 'click' : 'focus'
    } as const))

    const inputState = shallowReactive({
      width: 0,
      height: 0,
      value: ""
    })

    const active = computed(() => {
      const { options, value } = props.value
      let active: SelectOption | SelectOption[] = []
      if (!Array.isArray(value)) {
        active = options!.find(({ value: oV }) => value === oV)!
      } else {
        for (const sV of value) {
          const item = options?.find(({ value: oV }) => oV === sV)
          item && active.push(item)
        }
      }
      return active
    })

    const calculateOptionWidth = function () {
      if (!overlayRef.value) return 0
      const { getTrigger } = overlayRef.value
      const rect = getBoundingClientRect(getTrigger()?.$el || 0)
      inputState.width = isNumber(rect) ? rect : rect.width
    }

    const onUpdateValue: OnUpdateInputValueFn = function (value, operator) {
      const { "onUpdate:value": onUpdateValue, value: originalValue } = props.value
      let updateValue: SelectValue | null = null;
      if (!Array.isArray(originalValue) || !originalValue) {
        updateValue = value
      } else if (operator === Operators.Deletion || originalValue.includes(value)) {
        updateValue = originalValue.filter(oV => oV !== value)
      } else {
        updateValue = [...originalValue, value]
      }
      onUpdateValue && onUpdateValue(updateValue!)
      nextTick(() => overlayRef.value && overlayRef.value.updateOverlayPosition())
    }

    function focus() {
      const input = overlayRef.value?.getTrigger<InputInstance>()
      input?.focus()
    }

    function blur() {
      const input = overlayRef.value?.getTrigger<InputInstance>()
      input?.blur()
    }

    function onCloseTag(event?: MouseEvent, value?: SelectSingleValue) {
      event?.stopPropagation()
      onUpdateValue(value!, Operators.Deletion)
    }

    const renderTags: RenderTriggerFn = function () {
      const { multiple, size } = props.value
      if (!multiple || !isArray(active.value)) return null
      return (
        <div class={nsp.e('tags')}>
          {active.value.map(({ label, value }) => (
            <Tag closable size={size} key={value} onClose={
              (event) => onCloseTag(event, value)
            }>{{ label }}</Tag>
          ))}
        </div>
      )
    }

    const renderTrigger: RenderTriggerFn = function (hasInnerInput) {
      const { size, multiple } = props.value
      const value = !isArray(active.value) ? active.value?.label : active.value.join(',')
      const isRenderTag = multiple && isArray(active.value) && hasInnerInput
      const renderTag = isRenderTag ? () => renderTags(hasInnerInput) : undefined
      return (
        <Input
          class={nsp.is('inner', !hasInnerInput)}
          inputStyle={value && isRenderTag ? { height: '100% !important' } : {}}
          placeholder={state.value.placeholder}
          disabled={state.value.disabled}
          readonly={hasInnerInput}
          renderTag={renderTag}
          value={value}
          size={size}
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
        <div class={nsp.b()}>
          <Overlay
            ref={overlayRef}
            trigger={trigger}
            onHidden={blur}
            onVisible={calculateOptionWidth}
            onPositionUpdate={() => nextTick(() => calculateOptionWidth())}
            v-slots={{ trigger: () => renderTrigger(true) }}
          >
            <Options
              value={value}
              focus={focus}
              options={options}
              multiple={multiple}
              width={inputState.width}
              onUpdateValue={onUpdateValue}
            />
          </Overlay>
        </div >
      )
    }
  }
})

export default Select
