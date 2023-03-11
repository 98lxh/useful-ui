import type { InjectionKey } from 'vue'

export const Deletion = 0b00000001;
export const Addition = 0b00000010;

type GetOverlayElementFn = () => HTMLElement
type Action = typeof Deletion | typeof Addition

export interface OnUpdateChildrenFn {
  (getOverlayElementFn: GetOverlayElementFn, action: Action): void
}


interface OverlayContext {
  onUpdateChildrenFn: OnUpdateChildrenFn
}

export const overlayInjectionKey: InjectionKey<OverlayContext> = Symbol('OVERLAY_INJECTION_KEY')
