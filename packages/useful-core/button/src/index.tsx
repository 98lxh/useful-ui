import { computed, defineComponent, ref } from 'vue'
import { buttonProps, type ButtonProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'

import {
  className,
  createRipples,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const createRipplesOptions = (target: HTMLElement) => {
  return {
    target,
    duration: 700,
    name: 'button'
  }
}

const defaultProps: ButtonProps = {
  type: 'default',
  shape: 'square',
  size: 'middle',
  htmlType: 'button',
  ripple: true
}

const name = createComponentName('Button')
const bem = createNameSpace('button')

const Button = defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],
  setup(componetProps, { emit, slots }) {
    const buttonRef = ref<HTMLButtonElement | null>(null)
    const props = useMergeProps(componetProps, defaultProps)

    const classes = computed(() => {
      const { type, size, shape, ghost, block, danger, disabled, loading } =
        props.value

      return className(
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.m(shape),
        bem.is('disabled', disabled),
        bem.is('loading', loading),
        bem.is('ghost', ghost),
        bem.is('block', block),
        bem.is('danger', danger)
      )
    })

    function handleClick(event: MouseEvent) {
      const { disabled, loading, ripple, type } = props.value

      if (loading || disabled) {
        typeof event?.preventDefault === 'function' && event.preventDefault()
        return
      }

      if (ripple && type !== 'link' && type !== 'text') {
        createRipples(event, createRipplesOptions(buttonRef.value!))
      }

      emit('click', event)
    }

    return () => {
      const { htmlType } = props.value

      return (
        <button
          ref={buttonRef}
          type={htmlType}
          class={classes.value}
          onClick={handleClick}
        >
          {slots.default && slots.default()}
        </button>
      )
    }
  }
})

export default Button
