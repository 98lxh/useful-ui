export interface OutsideOptions {
  elm: HTMLElement | HTMLElement[]
  callback: () => void
  eventName?: any
}

function isContains(event: MouseEvent, _options: Omit<OutsideOptions, 'eventName' | 'callback'>) {
  const target = event.target as any;
  const { elm } = _options;
  if (!Array.isArray(elm)) return elm.contains(target)
  return elm.map(el => el.contains(target)).some((state) => state)
}

function createDocumentHandler(_options: Omit<OutsideOptions, 'eventName'>) {
  const { elm, callback } = _options;
  return function documentHandler(event: MouseEvent) {
    (elm as any).__handler__ = documentHandler;
    if (isContains(event, { elm })) return
    callback()
  }
}

export function createOutsideHelper(_options: OutsideOptions) {
  const { eventName = 'click', elm, callback, } = _options;
  const bind = () => window.addEventListener(eventName, createDocumentHandler({ elm, callback }))
  const remove = () => window.removeEventListener(eventName, (elm as any).__handler__)

  return {
    bind,
    remove
  }
}

export type OutsideHelper = ReturnType<typeof createOutsideHelper>
