import type { CSSProperties } from "vue"
import type { OverlayStyleOptions } from "./types"
import { getOverlayPosition } from "./position"

export function createOverlayStyle(_options: OverlayStyleOptions): CSSProperties {
  if (!_options.trigger || !_options.overlay) return {}
  const { trigger, overlay, placement, overlayTarget } = _options
  const { left, top } = getOverlayPosition({ trigger, overlay, placement: placement! })

  return {
    top: top + 'px',
    left: left + 'px',
    position: 'absolute',
    zIndex: overlayTarget.getHierarchy()
  }
}
