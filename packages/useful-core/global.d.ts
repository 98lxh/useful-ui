import type * as components from './components'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UseIcon: typeof components.UseIcon
  }
}
