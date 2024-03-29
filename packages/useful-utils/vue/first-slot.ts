import { Slots, VNode } from 'vue'
import { flatten } from './flatten-vnode'

export function getFirstSlotVNode(
  slots: Slots,
  slotName = 'default',
  props: unknown = undefined
): VNode | null {
  const slot = slots[slotName]
  if (!slot) {
    console.warn('getFirstSlotVNode', `slot[${slotName}] is empty`)
    return null
  }

  const slotContent = flatten(slot(props))
  if (slotContent && slotContent.length === 1) {
    return slotContent[0]
  } else {
    console.warn('getFirstSlotVNode', `slot[${slotName}] should have exactly one child`)
    return null
  }
}
