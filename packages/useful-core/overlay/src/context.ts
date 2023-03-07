import type { InjectionKey } from 'vue'

export interface OnUpdateOverlayChildrenFnOptions {
  getOverlayElementFn: () => HTMLElement
  mode: 'delete' | 'add'
}

interface OverlayContext {
  onUpdateChildrenFn: (options: OnUpdateOverlayChildrenFnOptions) => void,
}

export const overlayInjectionKey: InjectionKey<OverlayContext> = Symbol('OVERLAY_INJECTION_KEY')
