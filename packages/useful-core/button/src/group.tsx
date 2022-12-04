import { defineComponent } from 'vue'
import { createComponentName, createNameSpace } from '@useful-ui/utils'

const bem = createNameSpace('button-group')
const name = createComponentName('ButtonGroup')

const ButtonGroup = defineComponent({
  name,
  setup(_, { slots }) {
    return () => <div class={bem.b()}>{slots.default && slots.default()}</div>
  }
})

export default ButtonGroup
