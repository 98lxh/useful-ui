import { defineComponent, provide } from 'vue'
import { createComponentName, createNameSpace } from '@useful-ui/utils'
import { buttonGroupInjectionKey } from './context'
import { buttonGroupProps } from './props'

const nsp = createNameSpace('button-group')
const name = createComponentName('ButtonGroup')

const ButtonGroup = defineComponent({
  name,
  props: buttonGroupProps,
  setup(props, { slots }) {
    provide(buttonGroupInjectionKey, props)
    return () => <div class={nsp.b()}>{slots.default && slots.default()}</div>
  }
})

export default ButtonGroup
