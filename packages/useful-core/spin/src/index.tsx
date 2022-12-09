import { computed, defineComponent, reactive, ref, Transition } from 'vue'
import { useMergeProps, useVModel } from '@useful-ui/hooks'
import { spinProps, type SpinProps } from './props'
import LoadNode from './load-node'

import {
  className,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const defaultProps: SpinProps = {
  type: 'default',
  document: true
}

const modelConfig = {
  triggerEmit: false
}

const name = createComponentName('Spin')
const bem = createNameSpace('spin')

const Spin = defineComponent({
  name,
  props: spinProps,
  emits: ['update:visivle'],
  setup(componentProps, { expose }) {
    const props = useMergeProps(componentProps, defaultProps)

    const state = {
      type: useVModel(props.value, 'type', modelConfig),
      visible: useVModel(props.value, 'visible', modelConfig)
    }

    const classes = computed(() => {
      const { type } = state
      const { target, document } = props.value
      const isTarget = target ? bem.m('target') : ''
      return className(
        bem.b(),
        bem.is('document', document),
        bem.m(type.value),
        isTarget
      )
    })

    function renderContent() {
      const { visible } = state
      const { text, scale } = props.value
      if (!visible.value) return null

      return (
        <div class={classes.value}>
          <LoadNode {...{ text, scale }} />
        </div>
      )
    }

    expose({
      changeState: (key: string, value) => (state[key].value = value)
    })

    return () => {
      return <Transition name="spin">{renderContent()}</Transition>
    }
  }
})

export default Spin
