import { ExtractPropTypes, PropType, Ref } from 'vue'
import Overlay from './index'

export type OverlayPlacement = 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'
export type OverlayTrigger = 'hover' | 'focus' | 'click'


export const overlayProps = {
  visible: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /* overlay触发方式 **/
  trigger: {
    type: String as PropType<OverlayTrigger>
  },
  /**
   * overlay方向
  */
  placement: {
    type: String as PropType<OverlayPlacement>
  },
  onVisible: {
    type: Function
  }
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export interface OverlayInstance extends InstanceType<typeof Overlay> {
  getTriggerElement: () => HTMLElement
}
