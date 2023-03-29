import { computed, defineComponent, ref, shallowRef } from 'vue'
import { SelectOption, selectOptionsProps, SelectValue } from './props'
import Scrollbar from '../../scrollbar'

import {
  className,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const bem = createNameSpace('select-option')

const Options = defineComponent({
  name: createComponentName('SelectOptions'),
  props: selectOptionsProps,
  setup(props) {
    const style = computed(() => ({ width: props.width! + 'px' }))

    function createOptionClassName(option: SelectOption) {
      return className(
        bem.e('item'),
        bem.is('disbaled', option.disabled),
        bem.is('active', option.value === props.value),
      )
    }

    function onUpdateValue(option: SelectOption) {
      const { disabled, value } = option
      const { onUpdateValue } = props

      if (disabled || !onUpdateValue) {
        return
      }

      onUpdateValue(value)
    }

    return () => {
      return (
        <Scrollbar
          class={bem.b()}
          maxHeight={300}
          style={style.value}
          v-slots={{
            default: () => props.options?.map(option => (
              <li
                class={createOptionClassName(option)}
                onClick={() => onUpdateValue(option)}
              >
                {option.render ? option.render() : option.label}
              </li>
            ))
          }}
        />
      )
    }
  }
})

export default Options
