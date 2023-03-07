import { debounce } from "@useful-ui/utils";
import type { OverlayTrigger } from "../../../overlay";
import { CreateEventHandlerOptions } from "./types";

const mapOutsideEvent: Record<OverlayTrigger, string | null> = {
  'focus': null,
  'click': 'click',
  'hover': 'mousemove',
}

const mapEvent: Record<OverlayTrigger, string[]> = {
  'focus': ['onFocus', 'onBlur'],
  'hover': ['onMouseenter'],
  'click': ['onClick']
}


const mapEventHandler: Record<string, (...args: any[]) => any> = {
  'onFocus': (options: CreateEventHandlerOptions) => () => options.onUpdateVisible(true),
  'onBlur': (options: CreateEventHandlerOptions) => () => options.onUpdateVisible(false),
  'onMouseenter': (options: CreateEventHandlerOptions) => () => !options.currentVisible() && options.onUpdateVisible(true),
  'onClick': (options: CreateEventHandlerOptions) => () => options.onUpdateVisible(!options.currentVisible())
}

export const getOutsideEventName = (trigger: OverlayTrigger) => mapOutsideEvent[trigger]

export function createEventHandler(options: CreateEventHandlerOptions) {
  const eventNames = mapEvent[options.trigger]
  const handlers: any = {}

  for (const eventName of eventNames) {
    const wrapper = mapEventHandler[eventName]
    const debounceWrapper = debounce(wrapper(options), { delay: 80 })
    handlers[eventName] = debounceWrapper.run
    handlers[eventName].cancel = debounceWrapper.cancel
  }

  return {
    get: () => handlers,
    cancel: () => Object.keys(handlers).forEach(eventName => handlers[eventName]?.cancel())
  }
}

