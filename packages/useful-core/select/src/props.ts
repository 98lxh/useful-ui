import { ExtractPropTypes, PropType } from 'vue'
import { SelectOption } from './interface'

export const selectProps = {
  value: {
    type: String
  },
  placeholder: {
    type: String
  },
  ['onUpdate:value']: {
    type: Function
  },
  options: {
    type: Array as PropType<Array<SelectOption>>
  }
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
