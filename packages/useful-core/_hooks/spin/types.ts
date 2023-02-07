import { VNode } from "vue"
import { SpinProps, SpinType } from "../../spin"

export type SpinInstance = VNode<any, any, SpinProps> & {
  onDisplay: () => void
  onHidden: () => void
  changeType: (type: SpinType) => void
}

export type SpinOptions = SpinProps & {
  mountToWindow?: boolean
  blockScroll?: boolean
}

export type SpinState = {
  type?: SpinType
  visible?: boolean
}
