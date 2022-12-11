import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  /**
   * 图标颜色
   */
  color: {
    type: String
  },
  /**
   * 图标尺寸
   */
  size: {
    type: [Number, String]
  },
  /**
   * 原生点击事件
   */
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
