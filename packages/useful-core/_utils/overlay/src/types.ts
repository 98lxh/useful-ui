import { getOverlayTarget } from "./target"
import { getOverlayPosition } from "./position"
import type { OverlayPlacement, OverlayTrigger } from "../../../overlay"


export type OverlayPoint = 'tc' | 'tl' | 'tr' | 'bc' | 'bl' | 'br' | 'cl' | 'lt' | 'lb' | 'cr' | 'rt' | 'rb'
export type OverlayPosition = ReturnType<typeof getOverlayPosition>
export type OverlayPoints = [OverlayPoint, OverlayPoint]


export interface ComputePlacementOptions {
  placement: OverlayPlacement
  layHeight: number
  layWidth: number
  triLeft: number
  triTop: number
  triHeight: number
  triWidth: number
}


export interface OverlayPlacementOptions {
  triggerElement: HTMLElement
  overlayElement: HTMLElement
  placement: OverlayPlacement
}

export type TriggerBindEventOptions = {
  triggerElement?: HTMLElement
  handler: () => void
  eventName: any
}

export type OverlayStyleOptions = OverlayPlacementOptions & {
  overlayTarget: ReturnType<typeof getOverlayTarget>
}

export type CreateEventHandlerOptions = {
  trigger: OverlayTrigger
  onUpdateVisible: Function
  currentVisible: Function
}
