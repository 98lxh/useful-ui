import { computed, defineComponent, ref } from 'vue'
import { HiddenPassword, DisplayPassword } from '@useful-ui/icons'
import { useMergeProps } from '@useful-ui/hooks'
import { InputProps, inputProps } from './props'
import Spin from '@useful-ui/core/spin'
import Icon from '@useful-ui/core/icon'

import {
  className,
  createComponentName,
  createNameSpace
} from '@useful-ui/utils'

const bem = createNameSpace('input')
const name = createComponentName('Input')

const defaultProps: InputProps = {
  value: '',
  type: 'text',
  placeholder: ''
}

const Input = defineComponent({
  name,
  props: inputProps,
  setup(componetProps, { slots }) {
    const props = useMergeProps(componetProps, defaultProps)

    const focusedRef = ref(false)
    const showPasswordRef = ref(false)

    const classes = computed(() => {
      const { size, status } = props.value
      focusedRef.value
      return className(
        bem.b(),
        bem.m(size),
        status ? bem.m(status) : '',
        bem.is('focus', focusedRef.value)
      )
    })

    function handleFocus(event: FocusEvent) {
      const { onFocus, disabled } = props.value
      if (disabled) {
        return null
      }

      onFocus && onFocus(event)
      focusedRef.value = true
    }

    function handleBlur(event: FocusEvent) {
      const { onBlur } = props.value
      onBlur && onBlur(event)
      focusedRef.value = false
    }

    function handleInput(event: Event) {
      const { ['onUpdate:value']: onUpdateValue, onInput } = props.value
      const targetValue = (event.target as HTMLInputElement).value
      onUpdateValue && onUpdateValue(targetValue)
      onInput && onInput(targetValue)
    }

    function renderPrefix() {
      const customPrefix = slots.prefix
      if (!customPrefix) return null
      return <div class={bem.e('prefix')}>{customPrefix && customPrefix()}</div>
    }

    function renderPasswordSuffix() {
      return (
        <Icon onClick={() => (showPasswordRef.value = !showPasswordRef.value)}>
          {showPasswordRef.value ? <DisplayPassword /> : <HiddenPassword />}
        </Icon>
      )
    }

    function renderLoadingSuffix() {
      const { loadingType } = props.value
      return <Spin target visible type={loadingType} scale="0.35" />
    }

    function renderSuffix() {
      const customSuffix = slots.suffix
      const { type, loading } = props.value
      const isPassword = type === 'password'

      if (!isPassword && !loading && !customSuffix) {
        return null
      }

      return (
        <div class={bem.e('suffix')}>
          {customSuffix && customSuffix()}
          {loading && renderLoadingSuffix()}
          {isPassword && renderPasswordSuffix()}
        </div>
      )
    }

    function renderInput() {
      const { placeholder, value, type } = props.value
      const isPassword = type === 'password' && !showPasswordRef.value

      return (
        <div class={bem.e('input')}>
          <input
            class={bem.e('input-el')}
            type={isPassword ? 'password' : 'text'}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <div class={bem.e('placeholder')}>
            {!value && <span>{placeholder}</span>}
          </div>
        </div>
      )
    }

    return () => {
      return (
        <div class={classes.value}>
          <div class={bem.b('wrapper')}>
            {renderPrefix()}
            {renderInput()}
            {renderSuffix()}
          </div>
          <div class={bem.e('border')}></div>
          <div class={bem.e('state')}></div>
        </div>
      )
    }
  }
})

export default Input
