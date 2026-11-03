import { ref } from 'vue'

// 模块级单例：所有组件共享同一条提示
const message = ref('')
let timer = null

export function useToast() {
  function showToast(text, duration = 2600) {
    message.value = text
    clearTimeout(timer)
    timer = setTimeout(() => {
      message.value = ''
    }, duration)
  }

  return { message, showToast }
}
