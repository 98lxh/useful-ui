import { computed, defineComponent, reactive, Transition } from 'vue'
import { spinProps, type SpinProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'
import LoadNode from './load-node'

import {
  cls,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const defaultProps: SpinProps = {
  type: 'default',
  document: true
}

const nsp = createNameSpace('spin')

const Spin = defineComponent({
  name: createComponentName('Spin'),
  props: spinProps,
  setup(componentProps, { expose }) {
    const props = useMergeProps(componentProps, defaultProps)
    const state = reactive({
      type: props.value.type,
      visible: props.value.visible
    })


    const classes = computed(() => {
      const { type } = state
      const { target, document, status } = props.value
      return cls(
        nsp.b(),
        nsp.m(type),
        nsp.is(status!, status),
        nsp.is('target', target),
        nsp.is('document', document)
      )
    })

    expose({
      setState: (key: string, value) => (state[key] = value),
    })

    return () => {
      const { visible } = state
      const { text, scale } = props.value
      if (!visible) return null
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
