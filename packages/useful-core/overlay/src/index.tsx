import { defineComponent, onUnmounted, Teleport, ref, nextTick, onMounted, Transition, watch, cloneVNode, Fragment, reactive } from 'vue'
import { getOverlayTarget, createOverlayStyle, getOutsideEventName, createEventHandler, getTriggerElement } from '../../_utils/overlay'
import { createComponentName, createEventOutsideHelper, getFirstSlotVNode, type EventOutsideHelper } from '@useful-ui/utils'
import { overlayProps, type OverlayProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'
import { type CSSProperties } from 'vue'

const defaultProps: OverlayProps = {
  placement: 'top',
  trigger: 'click',
  mask: false
}

const Overlay = defineComponent({
  name: createComponentName('Overlay'),
  props: overlayProps,
  setup(componentProps, { slots }) {
    let clickOutsideHelper: EventOutsideHelper | null = null;
    const props = useMergeProps(componentProps, defaultProps)
    const triggerRef = ref<HTMLElement | null>(null)
    const overlayRef = ref<HTMLElement | null>(null);
    const overlayStyle = ref<CSSProperties | null>(null)
    const overlayTarget = getOverlayTarget();

    const state = reactive({
      placement: props.value.placement,
      visible: props.value.visible,
    })

    function getOverlayStyle() {
      const { placement } = props.value
      const overlayElement = overlayRef.value as HTMLElement
      const triggerElement = getTriggerElement(triggerRef.value)
      if (!triggerElement || !placement) return null;
      const options = { overlayElement, triggerElement, placement, overlayTarget }
      return createOverlayStyle(options)
    }

    function getOutsideEvent() {
      const { trigger } = props.value;
      const triggerElement = getTriggerElement(triggerRef.value)
      if (!triggerElement || !trigger) return null
      const getOverlayElement = () => overlayRef.value as HTMLElement
      const callback = () => onUpdateVisible(false);
      const options = { eventName: getOutsideEventName(trigger), elm: [triggerElement, getOverlayElement], callback }
      return createEventOutsideHelper(options)
    }

    async function onDisplayOverlay() {
      overlayTarget.incrementHierarchy()
      nextTick(() => {
        clickOutsideHelper = getOutsideEvent()
        const { placement, ..._overlayStyle } = getOverlayStyle()!
        overlayStyle.value = _overlayStyle
        state.placement = placement || defaultProps.placement
        clickOutsideHelper && clickOutsideHelper.registerListener()
      })
    }

    async function onUpdateVisible(visible: boolean) {
      if (state.visible !== visible) {
        state.visible = visible
        state.visible ? onDisplayOverlay() : clickOutsideHelper?.removeListener()
      }
    }

    function renderTrigger() {
      const triggerNode = getFirstSlotVNode(slots, 'trigger')
      if (!triggerNode) return null
      return cloneVNode(triggerNode, {
        ref: triggerRef,
        ...createEventHandler({
          onUpdateVisible,
          trigger: props.value.trigger!,
          currentVisible: () => state.visible
        })
      })
    }

    function renderOverlay() {
      const style: CSSProperties = overlayStyle.value ? overlayStyle.value : { position: 'absolute' }
      if (!state.visible) return null
      return (
        <div style={style} ref={overlayRef}>
          {slots.default && slots.default()}
        </div >
      )
    }

    watch(() => state.placement, async () => {
      onUpdateVisible(false)
      nextTick(() => onUpdateVisible(true))
    })

    onMounted(() => onUpdateVisible(props.value.visible!))
    onUnmounted(() => clickOutsideHelper && clickOutsideHelper.removeListener())

    return () => {
      return (
        <Fragment>
          {renderTrigger()}
          <Teleport to={overlayTarget.target}>
            <Transition name={state.placement}>
              {renderOverlay()}
            </Transition>
          </Teleport>
        </Fragment>
      )
    }
  }
})

export default Overlay
