import { getViewportOffset, isEquals } from "@useful-ui/utils";
import type { ComputePlacementOptions, OverlayPoints } from "./types";
import type { OverlayPlacement } from "../../../overlay";

type ComputeSymbolOptions = Pick<ComputePlacementOptions, 'layHeight' | 'layWidth' | 'triHeight' | 'triWidth'> & ReturnType<typeof getViewportOffset>

const mapPlacementToPoints: Record<OverlayPlacement, OverlayPoints> = {
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

const mapPlacement: Record<OverlayPlacement, Array<string>> = {
  'top-start': ['top', 'left'],
  'top': ['top', 'center'],
  'top-end': ['top', 'right'],
  'left-start': ['left', 'top'],
  'left': ['left', 'middle'],
  'left-end': ['left', 'bottom'],
  'right-start': ['right', 'top'],
  'right': ['right', 'middle'],
  'right-end': ['right', 'bottom'],
  'bottom-start': ['bottom', 'left'],
  'bottom': ['bottom', 'center'],
  'bottom-end': ['bottom', 'right']
}

const mapSuffix: Record<string, string> = {
  'left': '-start',
  'right': '-end',
  'top': '-start',
  'bottom': '-end',
  'middle': '',
  'center': ''
}

export const getPlacementPoints = (placement: OverlayPlacement) => mapPlacementToPoints[placement]
export const getPlacementSymbols = (placement: OverlayPlacement) => mapPlacement[placement]

function computePlacementPerfixSymbol(
  sourceSymbol: string,
  options: ComputeSymbolOptions
) {
  let targetSymbol = sourceSymbol
  const { layHeight, layWidth, bottom, right, top, left } = options;

  switch (sourceSymbol) {
    case 'top':
      if (top < layHeight) targetSymbol = 'bottom'
      break
    case 'left':
      if (left < layWidth) targetSymbol = 'right'
      break
    case 'bottom':
      if (bottom < layHeight) targetSymbol = 'top'
      break
    case 'right':
      if (right < layWidth) targetSymbol = 'left'
      break
  }

  return targetSymbol
}

function computePlacementSuffixSymbol(
  sourceSymbol: string,
  options: ComputeSymbolOptions
) {
  let targetSymbol = sourceSymbol
  const { layHeight, layWidth, triHeight, triWidth, bottomIncludeBody, right, top, left } = options;
  switch (sourceSymbol) {
    case 'top':
      if (bottomIncludeBody < layHeight) targetSymbol = 'middle'
      if (bottomIncludeBody - (triHeight / 2) < layHeight / 2) targetSymbol = 'bottom'
      break
    case 'left':
      if (right + triWidth < layWidth) targetSymbol = 'center'
      if (right + (triWidth / 2) < layWidth / 2) targetSymbol = 'right'
      break
    case 'bottom':
      if (top + triHeight < layHeight) targetSymbol = 'middle'
      if (top + (triHeight / 2) < layHeight / 2) targetSymbol = 'top'
      break
    case 'right':
      if (left + triWidth < layWidth) targetSymbol = 'center'
      if (left + (triWidth / 2) < layWidth / 2) targetSymbol = 'left'
      break
    case 'middle':
      if (top + (triHeight / 2) < layHeight / 2) targetSymbol = 'top'
      if (bottomIncludeBody - (triHeight / 2) < layHeight / 2) targetSymbol = 'bottom'
      break
    case 'center':
      if (left + (triWidth / 2) < layWidth / 2) targetSymbol = 'left'
      if (right + (triWidth / 2) < layWidth / 2) targetSymbol = 'right'
      break
  }

  return targetSymbol
}

const translateSuffixSymbol = (suffixSymbol: string) => mapSuffix[suffixSymbol]
export function getPlacement(options: ComputePlacementOptions) {
  const { layHeight, layWidth, triLeft, triTop, triHeight, triWidth } = options
  const symbols = getPlacementSymbols(options.placement)
  const viewportOffsetResult = getViewportOffset({ left: triLeft, top: triTop, width: triWidth, height: triHeight } as DOMRect)
  const prefixSymbol = computePlacementPerfixSymbol(symbols[0], { layHeight, layWidth, triHeight, triWidth, ...viewportOffsetResult })
  const suffixSymbol = computePlacementSuffixSymbol(symbols[1], { layHeight, layWidth, triHeight, triWidth, ...viewportOffsetResult })
  return prefixSymbol + translateSuffixSymbol(suffixSymbol) as OverlayPlacement
}
