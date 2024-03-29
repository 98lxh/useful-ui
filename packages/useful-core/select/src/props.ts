import { CSSProperties, ExtractPropTypes, PropType, VNodeChild } from 'vue'
import { Operators } from '../../_tokens'


export type SelectSize = 'small' | 'middle' | 'large'
export type SelectSingleValue = number | string
export type SelectValue = SelectSingleValue | Array<SelectSingleValue>

export interface SelectOption {
  class?: string
  label?: string
  disabled?: boolean
  value?: SelectSingleValue
  style?: CSSProperties
  render?: () => VNodeChild
}

export interface OnUpdateInputValueFn {
  (value: SelectSingleValue, operator: Operators): void
}

export interface RenderTriggerFn {
  (hasInnerInput: boolean): JSX.Element | null
}


export const selectProps = {
  /* 选择器的值 **/
  value: {
    type: [Number, String, Array] as PropType<SelectValue>
  },
  /* 选择器的尺寸 **/
  size: {
    type: String as PropType<SelectSize>
  },
  /* 选择器是否禁用 **/
  disabled: {
    type: Boolean,
    default: () => undefined
  },
  /* 选择器是否多选 **/
  multiple: {
    type: Boolean,
    default: () => undefined
  },
  placeholder: {
    type: String
  },
  /* 更新选择器值的方法 **/
  ['onUpdate:value']: {
    type: Function
  },
  /* 选择器的选项 **/
  options: {
    type: Array as PropType<Array<SelectOption>>
  }
}

export const selectOptionsProps = {
  value: {
    type: [Number, String, Array] as PropType<SelectValue>
  },
  onUpdateValue: {
    type: Function as PropType<OnUpdateInputValueFn>
  },
  multiple: {
    type: Boolean,
    default: () => undefined
  },
  options: {
    type: Array as PropType<Array<SelectOption>>,
    required: true
  },
  focus: {
    type: Function
  },
  width: {
    type: Number
  }
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
