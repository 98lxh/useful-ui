import type { InjectionKey } from 'vue'
import { ButtonShape, ButtonSize, ButtonType } from './props'

interface ButtonProvide {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  danger?: boolean
  disabled?: boolean
  ghost?: boolean
}

export const injectButtonKey: InjectionKey<ButtonProvide> = Symbol()
