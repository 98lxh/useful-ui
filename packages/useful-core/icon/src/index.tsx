import { computed, defineComponent } from 'vue'
import { createNameSpace, createComponentName } from '@useful-ui/utils'
import { iconProps } from './props'

const bem = createNameSpace('icon')

const Icon = defineComponent({
  name: createComponentName('Icon'),
  props: iconProps,
  setup(props, { slots }) {
    const style = computed(() => {
      const { size, color } = props
      if (!size && !color) return {}
      return {
        ...(size ? { 'font-size': size + 'px' } : {}),
        ...(color ? { color } : {})
      }
    })

    return () => {
      return (
        <i class={bem.b()} style={style.value} onClick={props.onClick}>
          {slots.default && slots.default()}
        </i>
      )
    }
  }
})

export default Icon
