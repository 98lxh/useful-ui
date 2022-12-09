import type * as components from './components'

declare module 'vue' {
  export interface GlobalComponents {
    UseIcon: typeof components.UseIcon
    UseButton: typeof components.UseButton
    UseButtonGroup: typeof components.UseButtonGroup
    UseSpace: typeof components.UseSpace
    UseSpin: typeof components.UseSpin
    UseInput: typeof components.UseInput
  }
}
