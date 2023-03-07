import { isFunction } from "../utils/_is"

type OutsideElement = HTMLElement | (() => HTMLElement)

export interface OutsideOptions {
  elm: OutsideElement | OutsideElement[]
  callback: () => void
  eventName?: any
}

function getOutsideElement(elm: OutsideElement): HTMLElement | undefined {
  if (isFunction(elm)) return elm()
  return elm
}

function isContains(event: MouseEvent, _options: Omit<OutsideOptions, 'eventName' | 'callback'>) {
  const target = event.target as any;
  const { elm } = _options;
  if (!Array.isArray(elm)) return getOutsideElement(elm)?.contains(target)
  return elm.map(el => getOutsideElement(el)?.contains(target)).some((state) => state)
}

export function createEventOutsideHelper(_options: OutsideOptions) {
  const { eventName = 'click', elm, callback, } = _options;
  let containsElement: OutsideElement | OutsideElement[] | null = null;

  function documentHandler(event: MouseEvent) {
    (elm as any).__handler__ = documentHandler;
    if (isContains(event, { elm: containsElement! })) return
    callback()
  }

  const registerListener = () => {
    window.addEventListener(eventName, documentHandler)
    setContainsElement(elm)
  }

  const removeListener = () => window.removeEventListener(eventName, documentHandler)

  const setContainsElement = (_containsElement: OutsideElement | OutsideElement[]) => containsElement = _containsElement

  return {
    setContainsElement,
    registerListener,
    removeListener
  }
}

export type EventOutsideHelper = ReturnType<typeof createEventOutsideHelper>
