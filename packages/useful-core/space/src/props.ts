import { ExtractPropTypes, PropType } from 'vue'

export type SpaceDirection = 'vertical' | 'horizontal'

export const spaceProps = {
  /**
   * 排列方向
   */
  direction: {
    type: String as PropType<SpaceDirection>
  },
  /**
   * 间距尺寸
   */
  size: {
    type: [Number, String] as PropType<number | string>
  },
  /**
   * 是否换行
   */
  wrap: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /***
   * 是否填充
   */
  fill: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  }
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
