import { defineComponent, provide } from 'vue'
import { createComponentName, createNameSpace } from '@useful-ui/utils'
import { buttonGroupState } from './context'
import { buttonGroupProps } from './props'

const bem = createNameSpace('button-group')
const name = createComponentName('ButtonGroup')

const ButtonGroup = defineComponent({
  name,
  props: buttonGroupProps,
  setup(props, { slots }) {
    provide(buttonGroupState, props)
    return () => <div class={bem.b()}>{slots.default && slots.default()}</div>
  }
})

export default ButtonGroup
