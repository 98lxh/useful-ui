import { computed, defineComponent } from 'vue'
import { SelectOption, selectOptionsProps } from './props'
import Scrollbar from '../../scrollbar'

import {
  className,
  createNameSpace,
  createComponentName,
  isArray
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
        bem.is('multiple-active', isArray(props.value) && props.value.includes(option.value))
      )
    }

    function onUpdateValue(option: SelectOption) {
      const { onUpdateValue, multiple, focus } = props
      if (!option.disabled){
        onUpdateValue && onUpdateValue({ value:option.value, isDeletion: false })
        multiple && focus?.()
      }
    }

    return () => {
      return (
        <Scrollbar
          class={bem.b()}
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
