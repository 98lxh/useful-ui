import { CSSProperties, defineComponent, onUnmounted, Teleport, watchEffect, ref, nextTick, onMounted, Transition } from 'vue'
import { getOverlayTarget, createOverlayStyle, getEventName, bindTriggerEvent, removeTriggerEvent } from '../../_utils/overlay'
import { createComponentName, createOutsideHelper, type OutsideHelper } from '@useful-ui/utils'
import { overlayProps, type OverlayProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'

const defaultProps: OverlayProps = {
  placement: 'top',
  trigger: 'click',
  mask: false
}

const Overlay = defineComponent({
  name: createComponentName('Overlay'),
  props: overlayProps,
  setup(componentProps, { slots }) {
    let outsideHelper: OutsideHelper | null = null;
    const props = useMergeProps(componentProps, defaultProps)
    const overlayRef = ref<HTMLElement | null>(null);
    const overlayStyle = ref<CSSProperties | null>(null)
    const eventName = getEventName(props.value.trigger!);
    const overlayTarget = getOverlayTarget();

    function getOverlayStyle() {
      const { triggerElement: trigger, placement } = props.value
      const overlay = overlayRef.value as HTMLElement
      if (!overlay || !trigger || !placement) return null;
      const options = { overlay, trigger, placement, overlayTarget }
      return createOverlayStyle(options)
    }

    function getOutsideEvent() {
      const { triggerElement, "onUpdate:visible": onUpdateVisible } = props.value
      const overlay = overlayRef.value as HTMLElement
      if (!overlay || !triggerElement) return null
      const callback = () => onUpdateVisible && onUpdateVisible(false)
      const options = { eventName, elm: [triggerElement, overlay], callback }
      return createOutsideHelper(options)
    }

    async function onDisplayOverlay() {
      overlayTarget.incrementHierarchy()
      nextTick(() => {
        outsideHelper = getOutsideEvent()
        overlayStyle.value = getOverlayStyle()
        outsideHelper && outsideHelper.bind()
      })
    }

    function triggerHandler() {
      const { "onUpdate:visible": onUpdateVisible, trigger, visible } = props.value;
      const updateValue = trigger === 'click' ? !visible : true
      onUpdateVisible && onUpdateVisible(updateValue)
    }

    function renderOverlay() {
      const { visible } = props.value;
      const style: CSSProperties = overlayStyle.value ? overlayStyle.value : { position: 'absolute' }
      if (!visible) return null
      return (
        <div style={style} ref={overlayRef}>
          {slots.default && slots.default()}
        </div >
      )
    }

    watchEffect(() => {
      const { visible, "onUpdate:visible": onUpdateVisible } = props.value
      if (!('visible' in props.value)) return
      visible ? onDisplayOverlay() : outsideHelper?.remove()
      onUpdateVisible && onUpdateVisible(!!visible)
    })

    onMounted(() => {
      nextTick(() => {
        const { triggerElement } = props.value
        bindTriggerEvent({
          eventName,
          triggerElement,
          handler: triggerHandler
        })
      })
    })

    onUnmounted(() => {
      const { triggerElement } = props.value;
      outsideHelper?.remove()
      removeTriggerEvent({
        eventName,
        triggerElement,
        handler: triggerHandler
      })
    })

    return () => {
      const { placement } = props.value
      return (
        <Teleport to={overlayTarget.target}>
          <Transition name={placement}>
            {renderOverlay()}
          </Transition>
        </Teleport>
      )
    }
  }
})

export default Overlay
