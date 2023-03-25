import type { CSSProperties } from "vue"
import type { OverlayStyleOptions } from "./types"

export function createOverlayStyle(_options: OverlayStyleOptions): CSSProperties {
  const { top, left, overlayTarget } = _options
  return {
    top: top + 'px',
    left: left + 'px',
    position: 'absolute',
    zIndex: overlayTarget.getHierarchy()
  }
}
