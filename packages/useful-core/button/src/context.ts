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

export const BUTTON_GROUP_STATE: InjectionKey<ButtonGroupState> =
  Symbol('BUTTON_GOURP_STATE')
