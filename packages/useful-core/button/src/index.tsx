import { computed, defineComponent, inject, ref } from 'vue'
import { buttonProps, type ButtonProps } from './props'
import { buttonGroupInjectionKey } from './context'
import { useMergeProps } from '@useful-ui/hooks'
import Spin from '@useful-ui/core/spin'

import {
  cls,
  createRipples,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const defaultProps: ButtonProps = {
  htmlType: 'button',
  ripple: true
}

const nsp = createNameSpace('button')

const Button = defineComponent({
  name: createComponentName('Button'),
  props: buttonProps,
  setup(componentProps, { slots }) {
    const props = useMergeProps(componentProps, defaultProps)
    const buttonGroupState = inject(buttonGroupInjectionKey, {})
    const buttonRef = ref<HTMLButtonElement | null>(null)

    const state = computed(() => {
      const { type, size, shape } = props.value
      return {
        size: size ?? buttonGroupState?.size ?? 'middle',
        type: type ?? buttonGroupState?.type ?? 'default',
        shape: shape ?? buttonGroupState?.shape ?? 'square'
      }
    })

    const classes = computed(() => {
      const { type, shape, size } = state.value
      const { ghost, block, danger, disabled, loading } = props.value
      return cls(
        nsp.b(),
        nsp.m(type),
        nsp.m(size),
        nsp.m(shape),
        nsp.is('ghost', ghost),
        nsp.is('block', block),
        nsp.is('danger', danger),
        nsp.is('loading', loading),
        nsp.is('disabled', disabled)
      )
    })

    function handleClick(event: MouseEvent) {
      const { disabled, loading, ripple, type, onClick } = props.value

      if (loading || disabled) {
        typeof event?.preventDefault === 'function' && event.preventDefault()
        return
      }

      if (ripple) {
        createRipples(event, buttonRef.value!, { name: 'button' })
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
