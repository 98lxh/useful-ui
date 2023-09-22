import { computed, defineComponent } from 'vue'
import { useMergeProps } from '@useful-ui/hooks'
import { loadNodeProps, LoadNodeProps } from './props'
import { createNameSpace, createComponentName } from '@useful-ui/utils'

const nsp = createNameSpace('spin__load')

const defaultProps: LoadNodeProps = {
  type: 'default'
}

const LoadNode = defineComponent({
  name: createComponentName('SpinLoadNode'),
  props: loadNodeProps,
  setup(componentProps) {
    const props = useMergeProps(componentProps, defaultProps)

    const styles = computed(() => {
      const { scale } = props.value
      const transform = `scale(${scale})`
      return { transform }
    })

    return () => {
      const { text } = props.value
      return (
        <div class={nsp.b()} style={styles.value}>
          <div class={nsp.e('animation')}>
            <div class={nsp.e('animation__1')} />
            <div class={nsp.e('animation__2')} />
            <div class={nsp.e('animation__3')} />
          </div>
          {text && <div class={nsp.b('text')}>{text}</div>}
        </div>
      )
    }
  }
})

export default LoadNode
