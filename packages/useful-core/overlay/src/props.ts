import { ExtractPropTypes, PropType } from 'vue'

export type OverlayPlacement = 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'
export type OverlayTrigger = 'hover' | 'focus' | 'click'


export const overlayProps = {
  visible: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  triggerElement: {
    type: Object as PropType<HTMLElement>
  },
  ['onUpdate:visible']: {
    type: Function as PropType<(visible: boolean) => void>
  },
  /**
   * overlay触发方式
  */
  trigger: {
    type: String as PropType<OverlayTrigger>
  },
  /**
   * overlay方向
  */
  placement: {
    type: String as PropType<OverlayPlacement>
  },
  mask: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
