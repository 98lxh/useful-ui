import { getCurrentInstance, ref, Ref, watch } from 'vue'

type Config = {
  triggerEmit?: boolean
}

const defaultConfig: Config = {
  triggerEmit: true
}

function useVModel<T = any>(
  props: any,
  propName: string,
  config = defaultConfig
): Ref<T> {
  const emit = getCurrentInstance()?.emit
  const modelValue = ref<T>(props[propName]) as Ref<T>
  const watchSource = () => props[propName]

  function watchCallback(newValue: T) {
    modelValue.value = newValue
    if (!config.triggerEmit) return
    emit && emit(`update:${propName}`)
  }

  watch(watchSource, watchCallback, {
    immediate: true
  })

  return modelValue
}

export default useVModel
