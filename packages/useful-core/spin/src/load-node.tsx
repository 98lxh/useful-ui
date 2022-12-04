import { computed, defineComponent } from 'vue'
import { loadNodeProps, LoadNodeProps } from './props'
import { createNameSpace, createComponentName } from '@useful-ui/utils'
import { useMergeProps } from '@useful-ui/hooks'

const bem = createNameSpace('spin__load')
const name = createComponentName('SpinLoadNode')

const defaultProps: LoadNodeProps = {
  type: 'default'
}

const LoadNode = defineComponent({
  name,
  props: loadNodeProps,
  setup(componetProps) {
    const props = useMergeProps(componetProps, defaultProps)

    const styles = computed(() => {
      const { scale } = props.value
      const transform = `scale(${scale})`
      return { transform }
    })

    return () => {
      const { text } = props.value

      return (
        <div class={bem.b()} style={styles.value}>
          <div class={bem.e('animation')}>
            <div class={bem.e('animation__1')} />
            <div class={bem.e('animation__2')} />
            <div class={bem.e('animation__3')} />
          </div>
          {text && <div class={bem.b('text')}>{text}</div>}
        </div>
      )
    }
  }
})

export default LoadNode
