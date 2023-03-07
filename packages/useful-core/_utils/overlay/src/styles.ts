import type { CSSProperties } from "vue"
import type { OverlayStyleOptions } from "./types"
// import type { OverlayPlacement } from "../../../overlay"
// import { getOverlayPosition } from "./position"

export function createOverlayStyle(_options: OverlayStyleOptions): CSSProperties {
  const { top, left, overlayTarget } = _options

  return {
    top: top + 'px',
    left: left + 'px',
    position: 'absolute',
    zIndex: overlayTarget.getHierarchy()
  }
}
