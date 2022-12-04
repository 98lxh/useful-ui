import { computed, defineComponent, ref, Transition } from 'vue'
import { useMergeProps, useVModel } from '@useful-ui/hooks'
import { spinProps, SpinType, type SpinProps } from './props'
import LoadNode from './load-node'

import {
  className,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const defaultProps: SpinProps = {
  type: 'default'
}

const name = createComponentName('Spin')
const bem = createNameSpace('spin')

const Spin = defineComponent({
  name,
  props: spinProps,
  emits: ['update:visivle'],
  setup(componentProps, { expose }) {
    const props = useMergeProps(componentProps, defaultProps)
    const visible = useVModel(props.value, 'visible', {
      triggerEmit: false
    })

    const type = useVModel(props.value, 'type', {
      triggerEmit: false
    })

    const classes = computed(() => {
      const { target } = props.value

      return className(
        bem.b(),
        bem.m(type.value),
        target ? bem.m('target') : ''
      )
    })

    expose({
      changeVisible: (_visible: boolean) => (visible.value = _visible),
      changeType: (_type: SpinType) => (type.value = _type)
    })

    return () => {
      const { text, scale } = props.value

      return (
        <Transition name="spin">
          {visible.value && (
            <div class={classes.value}>
              <LoadNode text={text} scale={scale} />
            </div>
          )}
        </Transition>
      )
    }
  }
})

export default Spin
