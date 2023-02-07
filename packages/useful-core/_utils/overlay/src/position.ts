import { getPlacementPoints } from "./placement";
import { OverlayPlacementOptions } from "./types";

export function getOverlayPosition(_options: OverlayPlacementOptions) {
  const { trigger, overlay, placement } = _options
  const { offsetTop: triOffsetTop, offsetLeft: triOffsetLeft } = trigger
  const { width: triWidth, height: triHeight } = trigger.getBoundingClientRect()
  const { width: layWidth, height: layHeight } = overlay!.getBoundingClientRect()
  const { scrollTop: docScrollTop, scrollLeft: docScrollLeft, offsetLeft: docLeft, offsetTop: docTop } = document.body

  const baseTop = triOffsetTop - docTop + docScrollTop
  const baseLeft = triOffsetLeft - docLeft + docScrollLeft
  const points = getPlacementPoints(placement)

  let top = getTriggerTop(points[1][0], baseTop, triHeight)
  let left = getTriggerLeft(points[1][1], baseLeft, triWidth)
  top = getOverlayTop(points[0][0], top, layHeight * 10)
  left = getOverlayLeft(points[0][1], left, layWidth * 10)
  return { left, top }
}

function getTriggerTop(point: string, baseTop: number, triHeight: number) {
  let _top = baseTop;
  switch (point) {
    case 't':
      _top += 0
      break
    case 'c':
      _top += triHeight / 2
      break
    case 'b':
      _top += triHeight
      break
  }
  return _top
}

function getTriggerLeft(point: string, baseLeft: number, triWidth: number) {
  let _left = baseLeft;
  switch (point) {
    case 'l':
      _left += 0;
      break
    case 'c':
      _left += triWidth / 2
      break
    case 'r':
      _left += triWidth
      break
  }
  return _left
}

function getOverlayTop(point: string, curTop: number, layHeight: number) {
  let _top = curTop;
  switch (point) {
    case 't':
      _top -= 0;
      break
    case 'c':
      _top -= layHeight / 2
      break
    case 'b':
      _top -= layHeight
      break
  }

  return _top
}

function getOverlayLeft(point: string, curLeft: number, layWidth: number) {
  let _left = curLeft;
  switch (point) {
    case 'l':
      _left -= 0;
      break
    case 'c':
      _left -= layWidth / 2
      break
    case 'r':
      _left -= layWidth
      break
  }
  return _left
}
