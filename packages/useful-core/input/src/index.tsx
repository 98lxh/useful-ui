import { defineComponent } from 'vue'
import { useMergeProps } from '@useful-ui/hooks'
import { createComponentName, createNameSpace } from '@useful-ui/utils'
import { InputProps, inputProps } from './props'

const bem = createNameSpace('input')
const name = createComponentName('Input')

const defaultProps: InputProps = {
  type: 'text',
  modelValue: '',
  placeholder: ''
}

const Input = defineComponent({
  name,
  props: inputProps,
  setup(componetProps, { slots, attrs }) {
    const props = useMergeProps(componetProps, defaultProps)

    function renderAfterOrBefore(slotName: 'after' | 'before') {
      const slot = slots[slotName]
      if (!slot) return null
      return <div class={bem.e(slotName)}>{slot()}</div>
    }

    function renderInputElement() {
      const { placeholder } = props.value
      const _bem = createNameSpace(bem.e('input'))
      return (
        <div class={_bem.b()}>
          <input class={_bem.b('el')} {...attrs} />
          <div class={bem.e('placeholder')}>
            <span>{placeholder}</span>
          </div>
        </div>
      )
    }

    return () => {
      return (
        <div class={bem.b('wrapper')}>
          {renderAfterOrBefore('after')}
          {renderInputElement()}
          {renderAfterOrBefore('before')}
        </div>
      )
    }
  }
})

export default Input
