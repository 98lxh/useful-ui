import { defineComponent, onUnmounted, Teleport, ref, nextTick, Transition, watch, cloneVNode, Fragment, reactive, provide, inject } from 'vue'
import { createComponentName, createEventOutsideHelper, getFirstSlotVNode, type EventOutsideHelper } from '@useful-ui/utils'
import { Addition, Deletion, OnUpdateChildrenFn, overlayInjectionKey } from './context'
import { OverlayPlacement, overlayProps, type OverlayProps } from './props'
import { useMergeProps } from '@useful-ui/hooks'
import { type CSSProperties } from 'vue'

import {
  getOverlayTarget,
  createOverlayStyle,
  getOutsideEventName,
  createEventHandler,
  getTriggerElement,
  TriggerHandlers,
  getOverlayPosition
} from '../../_composables/overlay'


const defaultProps: OverlayProps = {
  placement: 'bottom-start',
  trigger: 'click',
}

const Overlay = defineComponent({
  name: createComponentName('Overlay'),
  props: overlayProps,
  setup(componentProps, { slots, expose }) {
    let eventOutsideHelper: EventOutsideHelper | null = null
    const props = useMergeProps(componentProps, defaultProps)
    const overlayTarget = getOverlayTarget()
    const triggerRef = ref<HTMLElement | null>(null)
    const overlayRef = ref<HTMLElement | null>(null)
    let triggerHandlers: TriggerHandlers | null = null
    const overlayStyle = ref<CSSProperties | null>(null)
    const overlayParent = inject(overlayInjectionKey, null)
    const getOverlayElementFns: Set<() => HTMLElement> = new Set()
    let getOverlayPlacement: (() => OverlayPlacement) | null = null
    const getOverlayElementFn = () => overlayRef.value as HTMLElement

    const state = reactive({
      placement: props.value.placement,
      visible: props.value.visible,
    })

    function getOverlayStyle() {
      const { placement } = props.value
      if (!triggerRef.value || !placement) return null;
      const overlayElement = overlayRef.value as HTMLElement
      const triggerElement = getTriggerElement(triggerRef.value)

      const {
        placement: overlayPlacement,
        ...overlayPosition
      } = getOverlayPosition({
        triggerElement,
        overlayElement,
        placement
      });

      getOverlayPlacement = function () {
        return overlayPlacement;
      }

      return createOverlayStyle({ ...overlayPosition, overlayTarget })
    }

    function getOutsideEvent() {
      const { trigger } = props.value;
      if (!triggerRef.value || !trigger) return null
      const triggerElement = getTriggerElement(triggerRef.value)
      const callback = () => onUpdateVisible(false);
      const options = {
        callback,
        eventName: getOutsideEventName(trigger),
        elm: [triggerElement, getOverlayElementFn, ...getOverlayElementFns.values()],
      }
      return createEventOutsideHelper(options)
    }

    async function onDisplayOverlay() {
      const { onVisible } = props.value
      if (!eventOutsideHelper) {
        eventOutsideHelper = getOutsideEvent()
        eventOutsideHelper && eventOutsideHelper.registerListener()
      }

      overlayStyle.value = getOverlayStyle()!;
      if (getOverlayPlacement) state.placement = getOverlayPlacement();

      overlayTarget.incrementHierarchy()
      onVisible && onVisible()
    }

    async function onUpdateVisible(visible: boolean) {
      state.visible = visible;
      state.visible && nextTick(() => onDisplayOverlay())
    }

    function renderTrigger() {
      const triggerNode = getFirstSlotVNode(slots, 'trigger')
      if (!triggerNode) return null
      triggerHandlers = createEventHandler({
        onUpdateVisible,
        trigger: props.value.trigger!,
        currentVisible: () => state.visible
      })

      return cloneVNode(triggerNode, {
        ref: triggerRef,
        ...triggerHandlers.get()
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

    const onUpdateChildrenFn: OnUpdateChildrenFn = function (_getOverlayElementFn, action) {
      getOverlayElementFns[action === Deletion ? 'delete' : 'add'](_getOverlayElementFn)
      overlayParent?.onUpdateChildrenFn(_getOverlayElementFn, action)
      if (triggerRef.value) {
        const triggerElement = getTriggerElement(triggerRef.value)
        const containsElement = [triggerElement, getOverlayElementFn, ...getOverlayElementFns.values()];
        eventOutsideHelper && eventOutsideHelper.setContainsElement(containsElement)
      }
    }

    overlayParent && overlayParent.onUpdateChildrenFn(getOverlayElementFn, Addition)

    onUnmounted(() => {
      onUpdateChildrenFn(getOverlayElementFn, Deletion)
      eventOutsideHelper && eventOutsideHelper.removeListener()
      triggerHandlers && triggerHandlers.cancel()
    })

    provide(overlayInjectionKey, { onUpdateChildrenFn })

    expose({
      getTriggerElement: () => getTriggerElement(triggerRef.value)
    })

    return () => {
      return (
        <Fragment>
          {renderTrigger()}
          <Teleport to={overlayTarget.target}>
            <Transition name={state.placement} appear>
              {renderOverlay()}
            </Transition>
          </Teleport>
        </Fragment >
      )
    }
  }
})

export default Overlay
