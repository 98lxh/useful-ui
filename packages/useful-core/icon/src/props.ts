import { ExtractPropTypes } from 'vue'

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
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
