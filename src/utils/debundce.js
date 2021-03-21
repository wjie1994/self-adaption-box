/**
 * 防抖函数
 * @param { Function } fn
 * @param { Number } delay
 * @returns {function(): void}
 */
export function debounce (fn, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
