import { computed, defineComponent, ref, shallowRef, watch } from 'vue'
import { SelectProps, selectProps, SelectValue } from './props'
import Overlay, { OverlayInstance } from '../../overlay'
import { useMergeProps } from '@useful-ui/hooks'
import { ArrowDown } from "@useful-ui/icons"
import Options from "./options"
import Input from '../../input'
import Icon from "../../icon"

import {
  isNumber,
  createComponentName,
  getBoundingClientRect
} from '@useful-ui/utils'

const defaultProps: SelectProps = {
  options: [],
  disabled: false
}

const Select = defineComponent({
  name: createComponentName('Select'),
  props: selectProps,
  setup(componentProps) {
    const props = useMergeProps(componentProps, defaultProps)
    const overlayRef = ref<OverlayInstance | null>(null)
    const inputValue = ref<SelectValue>(undefined)
    const inputWidth = shallowRef(0)

    const active = computed(() => {
      const { options } = props.value
      return options!.find(({ value }) => value === inputValue.value)
    })

    function calculateOptionWidth() {
      if (!overlayRef.value) return 0
      const { getTriggerElement } = overlayRef.value
      const rect = getBoundingClientRect(getTriggerElement() || 0)
      inputWidth.value = isNumber(rect) ? rect : rect.width
    }

    function onUpdateInputValue(value: SelectValue) {
      const { "onUpdate:value": onUpdateValue } = props.value
      inputValue.value = value;
      onUpdateValue && onUpdateValue(value)
    }

    function renderTrigger() {
      const { placeholder, disabled, size } = props.value
      return (
        <Input
          readonly
          size={size}
          placeholder={placeholder}
          value={active.value?.label}
          disabled={disabled}
          v-slots={{
            suffix: () => (<Icon><ArrowDown /></Icon>)
          }}
        />
      )
    }

    watch(() => props.value.value, (value: SelectValue) => {
      onUpdateInputValue(value)
    }, {
      immediate: true
    })

    return () => {
      return (
        <Overlay
          trigger='focus'
          ref={overlayRef}
          onVisible={calculateOptionWidth}
          v-slots={{
            trigger: () => renderTrigger(),
            default: () => (
              <Options
                width={inputWidth.value}
                value={props.value.value}
                options={props.value.options}
                onUpdateValue={onUpdateInputValue}
              />
            ),
          }}
        />
      )
    }
  }
})

export default Select
