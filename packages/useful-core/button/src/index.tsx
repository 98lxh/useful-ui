import { computed, defineComponent, inject, ref } from 'vue'
import { buttonProps, type ButtonProps } from './props'
import { buttonGroupInjectionKey } from './context'
import { useMergeProps } from '@useful-ui/hooks'
import Spin from '@useful-ui/core/spin'

import {
  className,
  createRipples,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const defaultProps: ButtonProps = {
  htmlType: 'button',
  ripple: true
}

const name = 'button'
const bem = createNameSpace(name)

const Button = defineComponent({
  name: createComponentName('Button'),
  props: buttonProps,
  setup(componetProps, { slots }) {
    const props = useMergeProps(componetProps, defaultProps)
    const buttonGroupState = inject(buttonGroupInjectionKey, {})
    const buttonRef = ref<HTMLButtonElement | null>(null)

    const state = computed(() => {
      const { type, size, shape } = props.value
      return {
        type: type ?? buttonGroupState?.type ?? 'default',
        size: size ?? buttonGroupState?.size ?? 'middle',
        shape: shape ?? buttonGroupState?.shape ?? 'square'
      }
    })

    const classes = computed(() => {
      const { type, shape, size } = state.value
      const { ghost, block, danger, disabled, loading } = props.value

      return className(
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.m(shape),
        bem.is('danger', danger),
        bem.is('disabled', disabled),
        bem.is('ghost', ghost),
        bem.is('loading', loading),
        bem.is('block', block)
      )
    })

    function handleClick(event: MouseEvent) {
      const { disabled, loading, ripple, type, onClick } = props.value

      if (loading || disabled) {
        typeof event?.preventDefault === 'function' && event.preventDefault()
        return
      }
      if (ripple && type !== 'link' && type !== 'text') {
        createRipples(event, buttonRef.value!, { name })
      }

      onClick && onClick(event)
    }

    function renderSpinning() {
      const { loading, loadingType } = props.value
      if (!loading) return null
      return (
        <Spin
          target
          visible
          scale='0.5'
          document={false}
          type={loadingType}
        />
      )
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
