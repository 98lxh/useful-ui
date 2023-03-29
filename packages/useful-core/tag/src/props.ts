import { ExtractPropTypes, PropType } from 'vue'

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type TagSize = 'middle' | 'small' | 'large'

export const tagProps = {
  /* 类型 **/
  type: {
    type: String as PropType<TagType>
  },
  size: {
    type: String as PropType<TagSize>
  },
  /* 是否有边框 **/
  bordered: {
    type: Boolean,
    default: undefined
  },
  /* 是否可关闭 **/
  closable: {
    type: Boolean,
    default: undefined
  },
  /* 标签颜色，设置type后无效 **/
  color: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  /* 是否圆角 **/
  round: {
    type: Boolean,
    default: undefined
  },
  onClose: {
    type: Function
  }
}

export type TagProps = ExtractPropTypes<typeof tagProps>
