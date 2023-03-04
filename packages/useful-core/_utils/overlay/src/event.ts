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
  'onMouseenter': (options: CreateEventHandlerOptions) => () => options.onUpdateVisible(true),
  'onClick': (options: CreateEventHandlerOptions) => () => options.onUpdateVisible(!options.currentVisible())
}

export const getOutsideEventName = (trigger: OverlayTrigger) => mapOutsideEvent[trigger]

export function createEventHandler(options: CreateEventHandlerOptions) {
  const eventNames = mapEvent[options.trigger]
  const _handlers: any = {}
  for (const eventName of eventNames) {
    const wrapper = mapEventHandler[eventName]
    _handlers[eventName] = wrapper(options)
  }
  console.log(_handlers)
  return _handlers
}
