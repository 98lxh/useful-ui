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

export const buttonGroupState: InjectionKey<ButtonGroupState> = Symbol('BUTTON_GOURP_STATE')
