import { computed, defineComponent } from 'vue'
import { useMergeProps } from '@useful-ui/hooks'
import { type SpaceProps, spaceProps } from './props'

import {
  cls,
  flatten,
  createNameSpace,
  createComponentName,
} from '@useful-ui/utils'

const defaultProps: SpaceProps = {
  size: 5,
  direction: 'horizontal'
}

const nsp = createNameSpace('space')

const Space = defineComponent({
  name: createComponentName('Space'),
  props: spaceProps,
  setup(componetProps, { slots }) {
    const props = useMergeProps(componetProps, defaultProps)

    const classes = computed(() => {
      const { direction, wrap, fill } = props.value
      return cls(
        nsp.b(),
        nsp.is(direction!, true),
        nsp.is('wrap', wrap || direction === 'vertical'),
        nsp.is('fill', fill)
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
      const children = flatten(slots.default && slots.default())
      if (!children) return null
      return children.map(childNode => (
        <div class={nsp.b('item')} style={styles.value}>
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
