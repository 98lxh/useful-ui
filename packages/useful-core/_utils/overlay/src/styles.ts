import type { CSSProperties } from "vue"
import type { OverlayStyleOptions } from "./types"
import type { OverlayPlacement } from "../../../overlay"
import { getOverlayPosition } from "./position"

export function createOverlayStyle(_options: OverlayStyleOptions): CSSProperties & { placement?: OverlayPlacement } {
  if (!_options.triggerElement || !_options.overlayElement) return {}
  const { triggerElement, overlayElement, overlayTarget } = _options
  const { left, top, placement } = getOverlayPosition({ triggerElement, overlayElement, placement: _options.placement! })

  return {
    placement,
    top: top + 'px',
    left: left + 'px',
    position: 'absolute',
    zIndex: overlayTarget.getHierarchy()
  }
}
