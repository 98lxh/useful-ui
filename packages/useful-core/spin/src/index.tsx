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
  setup(componentProps, { expose }) {
    const props = useMergeProps(componentProps, defaultProps)

    const state = {
      type: useVModel(props.value, 'type', modelConfig),
      visible: useVModel(props.value, 'visible', modelConfig)
    }

    const classes = computed(() => {
      const { type } = state
      const { target, document, status } = props.value
      return className(
        bem.b(),
        bem.is(status!, status),
        bem.is('target', target),
        bem.is('document', document),
        bem.m(type.value)
      )
    })

    expose({
      setState: (key: string, value) => (state[key].value = value)
    })

    return () => {
      const { visible } = state
      const { text, scale } = props.value
      if (!visible.value) return null
      return (
        <Transition name="spin">
          <div class={classes.value}>
            <LoadNode {...{ text, scale }} />
          </div>
        </Transition>
      )
    }
  }
})

export default Spin
