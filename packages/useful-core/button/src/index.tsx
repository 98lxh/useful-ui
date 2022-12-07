import { computed, defineComponent, inject, provide, ref } from 'vue'
import { buttonProps, type ButtonProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'
import Spin from '@useful-ui/core/spin'

import {
  className,
  createRipples,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'
import { injectButtonKey } from './context'

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

const spinScale = {
  small: '0.4',
  middle: '0.5',
  large: '0.7'
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
    const context = inject(injectButtonKey, {})

    const classes = computed(() => {
      const { type, size, shape, ghost, block, danger, disabled, loading } =
        props.value
      return className(
        bem.b(),
        bem.m(context.type || type),
        bem.m(context.size || size),
        bem.m(context.shape || shape),
        bem.is('danger', context.danger || danger),
        bem.is('disabled', context.disabled || disabled),
        bem.is('ghost', context.ghost || ghost),
        bem.is('loading', loading),
        bem.is('block', block)
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

    function renderSpinning() {
      const { loading, loadingType, size } = props.value
      const scale = spinScale[size || 'middle']
      if (!loading) return null
      return <Spin visible type={loadingType} scale={scale} target />
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
          {renderSpinning()}
          {slots.icon && slots.icon()}
          {slots.default && slots.default()}
        </button>
      )
    }
  }
})

export default Button
