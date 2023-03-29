import { CSSProperties, ExtractPropTypes, PropType, VNodeChild } from 'vue'

export type SelectValue = number | string | undefined
export type SelectSize = 'small' | 'middle' | 'large'

export interface SelectOption {
  class?: string
  disabled?: boolean
  render?: () => VNodeChild
  style?: CSSProperties
  label?: string
  value?: SelectValue
}

export const selectProps = {
  value: {
    type: [Number, String]
  },
  size: {
    type: String as PropType<SelectSize>
  },
  placeholder: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  ['onUpdate:value']: {
    type: Function
  },
  options: {
    type: Array as PropType<Array<SelectOption>>
  }
}

export const selectOptionsProps = {
  value: {
    type: [Number, String]
  },
  onUpdateValue: {
    type: Function
  },
  options: {
    type: Array as PropType<Array<SelectOption>>,
    required: true
  },
  width: {
    type: Number
  }
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
