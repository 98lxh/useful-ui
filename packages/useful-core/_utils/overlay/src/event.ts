import type { OverlayTrigger } from "../../../overlay";
import { TriggerBindEventOptions } from "./types";

const mapTriggerToEvent: Record<OverlayTrigger, string> = {
  'click': 'click',
  'focus': 'focus',
  'hover': 'mousemove',
}
export const getEventName = (trigger: OverlayTrigger) => mapTriggerToEvent[trigger]
export function bindTriggerEvent(_options: TriggerBindEventOptions) {
  const { eventName, triggerElement, handler } = _options;
  triggerElement && triggerElement.addEventListener(eventName, handler);
}

export function removeTriggerEvent(_options: TriggerBindEventOptions) {
  const { eventName, triggerElement, handler } = _options;
  triggerElement && triggerElement.removeEventListener(eventName, handler);
}
