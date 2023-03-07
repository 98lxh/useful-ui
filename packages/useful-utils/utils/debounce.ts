interface IDebounceConfig {
  delay?: number
  immediate?: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  resultCallback?: Function
}

const defaultDebounceConfig: IDebounceConfig = {
  delay: 300,
  immediate: false
}

/**
 * 函数防抖
 * @param {fn} 防抖处理的函数
 * @param {config} 配置项
*/
// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(fn: Function, config?: IDebounceConfig) {
  const _config = { ...defaultDebounceConfig, ...config }
  let _timer: number | null = null
  let _isInvoke = false

  const _debounce = function (...args: any[]) {
    const { immediate, delay, resultCallback } = _config
    if (_timer) clearTimeout(_timer)

    //判断是否需要立即执行
    if (immediate && !_isInvoke) {
      const result = fn.apply(this, args)
      resultCallback && resultCallback(result)
      _isInvoke = true
    } else {
      _timer = setTimeout(() => {
        const result = fn.apply(this, args)
        resultCallback && resultCallback(result)
        _isInvoke = false
        _timer = null
      }, delay)
    }
  }

  function cancel() {
    if (_timer) clearTimeout(_timer)
    _timer = null
    _isInvoke = false
  }


  return {
    run: _debounce,
    cancel
  }
}
