import { computed, defineComponent } from 'vue'
import { SelectOption, selectOptionsProps } from './props'
import { Operators } from '../../_tokens'
import Scrollbar from '../../scrollbar'

import {
  cls,
  isArray,
  createNameSpace,
  createComponentName,
} from '@useful-ui/utils'

const nsp = createNameSpace('select-option')

const Options = defineComponent({
  name: createComponentName('SelectOptions'),
  props: selectOptionsProps,
  setup(props) {
    const style = computed(() => ({ width: props.width! + 'px' }))

    function createOptionClassName(option: SelectOption) {
      return cls(
        nsp.e('item'),
        nsp.is('disbaled', option.disabled),
        nsp.is('active', option.value === props.value),
        nsp.is('multiple-active', isArray(props.value) && props.value.includes(option.value!))
      )
    }

    function onUpdateValue(option: SelectOption) {
      const { onUpdateValue, multiple, focus } = props
      if (!option.disabled) {
        onUpdateValue && onUpdateValue(option.value!, Operators.Addition)
        multiple && focus?.()
      }
    }

    return () => {
      return (
        <Scrollbar
          class={nsp.b()}
          maxHeight={300}
          style={style.value}
          v-slots={{
            default: () => props.options?.map(option => (
              <li class={createOptionClassName(option)} onClick={() => onUpdateValue(option)}>
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
