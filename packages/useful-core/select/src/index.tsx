import { computed, defineComponent, ref } from 'vue'
import { SelectProps, selectProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'
import Overlay, { OverlayInstance } from '../../overlay'
import Input from '../../input'

import {
  isNumber,
  createNameSpace,
  createComponentName,
  getBoundingClientRect,
  className
} from '@useful-ui/utils'

const defaultProps: SelectProps = {
}

const bem = createNameSpace('select')

const Select = defineComponent({
  name: createComponentName('Select'),
  props: selectProps,
  setup(componentProps, { slots }) {
    const props = useMergeProps(componentProps, defaultProps)
    const overlayRef = ref<OverlayInstance | null>(null)
    const optionWidth = ref(0)

    const style = computed(() => {
      return ({
        width: optionWidth.value + 'px'
      })
    })

    function computeOptionWidth() {
      if (!overlayRef.value) return 0
      const { getTriggerElement } = overlayRef.value
      const rect = getBoundingClientRect(getTriggerElement() || 0)
      optionWidth.value = isNumber(rect) ? rect : rect.width
    }

    function renderInput() {
      const { placeholder } = props.value
      return (
        <Input
          readonly
          placeholder={placeholder}
        />
      )
    }

    function renderOptions() {
      const { options } = props.value
      return (
        <ul class={bem.b('option')} style={style.value}>
          {
            options?.map(option => (
              <li class={bem.b('option__item')}>{option.label}</li>
            ))
          }
        </ul>
      )
    }

    return () => {
      return (
        <Overlay
          ref={overlayRef}
          trigger='click'
          onVisible={computeOptionWidth}
          v-slots={{
            trigger: () => renderInput(),
            default: () => renderOptions()
          }}
        />
      )
    }
  }
})

export default Select
