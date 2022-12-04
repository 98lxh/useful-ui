import { ExtractPropTypes, PropType } from 'vue'

import { type LoadingType } from '@useful-ui/core/loading'

export type ButtonSize = 'large' | 'middle' | 'small'
export type ButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default'
export type ButtonShape = 'square' | 'circle' | 'round'
export type ButtonHTMLType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  /**
   * 按钮的尺寸
   */
  size: {
    type: String as PropType<ButtonSize>
  },
  /**
   * 按钮的类型
   */
  type: {
    type: String as PropType<ButtonType>
  },
  /**
   * 按钮的形状
   */
  shape: {
    type: String as PropType<ButtonShape>
  },
  /**
   * 加载图标类型
   */
  loadingType: {
    type: String as PropType<LoadingType>
  },
  /**
   *  是否禁用
   */
  disabled: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /**
   * 原生button的type属性
   */
  htmlType: {
    type: String as PropType<ButtonHTMLType>
  },
  /**
   * 是否为幽灵按钮
   */
  ghost: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /**
   * 是否为加载状态
   */
  loading: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /**
   * 是否为Block按钮
   */
  block: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /**
   * 是否启用涟漪效果
   */
  ripple: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /**
   * 是否为危险按钮
   */
  danger: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
