import type { CSSProperties } from "vue"
import type { OverlayStyleOptions } from "./types"
import type { OverlayPlacement } from "../../../overlay"
import { getOverlayPosition } from "./position"

export function createOverlayStyle(_options: OverlayStyleOptions): CSSProperties & { placement?: OverlayPlacement } {
  if (!_options.trigger || !_options.overlay) return {}
  const { trigger, overlay, overlayTarget } = _options
  const { left, top, placement } = getOverlayPosition({ trigger, overlay, placement: _options.placement! })

  return {
    placement,
    top: top + 'px',
    left: left + 'px',
    position: 'absolute',
    zIndex: overlayTarget.getHierarchy()
  }
}
