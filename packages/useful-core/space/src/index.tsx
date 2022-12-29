import { computed, defineComponent } from 'vue'
import { useMergeProps } from '@useful-ui/hooks'
import { type SpaceProps, spaceProps } from './props'

import {
  className,
  flattenVNodes,
  createNameSpace,
  createComponentName,
} from '@useful-ui/utils'

const defaultProps: SpaceProps = {
  size: 5,
  direction: 'horizontal'
}

const bem = createNameSpace('space')

const Space = defineComponent({
  name: createComponentName('Space'),
  props: spaceProps,
  setup(componetProps, { slots }) {
    const props = useMergeProps(componetProps, defaultProps)

    const classes = computed(() => {
      const { direction, wrap, fill } = props.value
      return className(
        bem.b(),
        bem.is(direction!, true),
        bem.is('wrap', wrap || direction === 'vertical'),
        bem.is('fill', fill)
      )
    })

    const styles = computed(() => {
      const { direction, size, wrap } = props.value
      return {
        marginRight: size + 'px',
        marginBottom: wrap || direction === 'vertical' ? size + 'px' : 0
      }
    })

    function renderChildren(): JSX.Element[] | null {
      const children = flattenVNodes(slots.default && slots.default())
      if (!children) return null
      return children.map(childNode => (
        <div class={bem.b('item')} style={styles.value}>
          {childNode}
        </div>
      ))
    }

    return () => {
      return <div class={classes.value}>{renderChildren()}</div>
    }
  }
})

export default Space
