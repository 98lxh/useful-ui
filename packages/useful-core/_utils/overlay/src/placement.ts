import type { OverlayPlacementOptions, OverlayPoints, OverlayPosition } from "./types";
import type { OverlayPlacement } from "../../../overlay";

const MapPlacement: Record<OverlayPlacement, OverlayPoints> = {
  'top-start': ['bl', 'tl'],
  'top': ['bc', 'tc'],
  'top-end': ['br', 'tr'],
  'left-start': ['tr', 'tl'],
  'left': ['cr', 'cl'],
  'left-end': ['br', 'bl'],
  'right-start': ['tl', 'tr'],
  'right': ['cl', 'cr'],
  'right-end': ['bl', 'br'],
  'bottom-start': ['tl', 'bl'],
  'bottom': ['tc', 'bc'],
  'bottom-end': ['tr', 'br']
}
export const getPlacementPoints = (placement: OverlayPlacement) => MapPlacement[placement]
