import { defineComponent, provide } from 'vue'
import { createComponentName, createNameSpace } from '@useful-ui/utils'
import { BUTTON_GROUP_STATE } from './context'
import { buttonGroupProps } from './props'

const bem = createNameSpace('button-group')
const name = createComponentName('ButtonGroup')

const ButtonGroup = defineComponent({
  name,
  props: buttonGroupProps,
  setup(props, { slots }) {
    provide(BUTTON_GROUP_STATE, props)
    return () => <div class={bem.b()}>{slots.default && slots.default()}</div>
  }
})

export default ButtonGroup
