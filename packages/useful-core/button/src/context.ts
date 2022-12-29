import type { InjectionKey } from 'vue'
import { ButtonShape, ButtonSize, ButtonType } from './props'

interface ButtonGroupState {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  danger?: boolean
  disabled?: boolean
  ghost?: boolean
}

export const buttonGroupInjectionKey: InjectionKey<ButtonGroupState> = Symbol('BUTTON_GROUP_INJECTION_KEY')
