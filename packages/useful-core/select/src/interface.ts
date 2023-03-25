import { CSSProperties, VNodeChild } from "vue"

export interface SelectOption {
  class?: string
  disabled?: boolean
  render?: () => VNodeChild
  style?: CSSProperties
  label?: string
  value?: string | number
}
