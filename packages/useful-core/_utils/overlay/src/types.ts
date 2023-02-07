import { getOverlayTarget } from "./target"
import { getOverlayPosition } from "./position"
import type { OverlayPlacement } from "../../../overlay"

export interface OverlayPlacementOptions {
  trigger: HTMLElement
  overlay: HTMLElement
  placement: OverlayPlacement
}

export type OverlayPoint = 'tc' | 'tl' | 'tr' | 'bc' | 'bl' | 'br' | 'cl' | 'lt' | 'lb' | 'cr' | 'rt' | 'rb'

export type OverlayPoints = [OverlayPoint, OverlayPoint]

export type OverlayPosition = ReturnType<typeof getOverlayPosition>

export type OverlayStyleOptions = OverlayPlacementOptions & {
  overlayTarget: ReturnType<typeof getOverlayTarget>
}

export type TriggerBindEventOptions = {
  triggerElement?: HTMLElement
  handler: () => void
  eventName: any
}
