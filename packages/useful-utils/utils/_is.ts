export const is = (value: unknown, type: string): boolean => {
  return toString.call(value) === `[object ${type}]`
}

export const isFunction = (value: unknown): value is Function => is(value, 'Function')
export const isNumber = (value: unknown): value is number => typeof value === 'number'
export const isArray = <T = unknown>(value: unknown): value is Array<T> => is(value, 'Array')
export const isEquals = (s1: string, s2: string) => s1 === s2
