import { PropType, ExtractPropTypes } from 'vue'

export type SpinType =
  | 'waves'
  | 'corners'
  | 'border'
  | 'points'
  | 'square'
  | 'rectangle'
  | 'circles'
  | 'square-rotate'
  | 'scale'
  | 'default'

export type SpinStatus = 'error' | 'warning'

export const spinProps = {
  /**
   * 加载类型
   */
  type: {
    type: String as PropType<SpinType>
  },
  /**
   * 加载状态
   */
  status: {
    type: String as PropType<SpinStatus>
  },
  /**
   * 是否显示加载状态
   */
  visible: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },
  /***
   * 加载提示文字
   */
  text: {
    type: String
  },
  /**
   * 是否存在目标元素
   */
  target: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },
  /**
   * 缩放比例
   */
  scale: {
    type: String
  },
  /**
   * 是否在文档流
   */
  document: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  }
}

const { text, type, scale } = spinProps

export const loadNodeProps = { text, type, scale }

export type SpinProps = ExtractPropTypes<typeof spinProps>
export type LoadNodeProps = ExtractPropTypes<typeof loadNodeProps>
