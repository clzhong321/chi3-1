import { computed, reactive, watch } from 'vue'
import { useToast } from './useToast'

const KEY = 'shiguang-cart'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

// 模块级 reactive 单例：任何组件 import 拿到的都是同一份状态
const state = reactive({ items: load() })

watch(
  () => state.items,
  (items) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      // 隐私模式等场景下静默失败
    }
  },
  { deep: true },
)

export function useCart() {
  const { showToast } = useToast()

  const items = computed(() => state.items)
  const count = computed(() => state.items.reduce((sum, item) => sum + item.quantity, 0))
  const subtotal = computed(() =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  function add(dish, quantity = 1) {
    const found = state.items.find((item) => item.id === dish.id)
    if (found) {
      found.quantity = Math.min(found.quantity + quantity, 20)
    } else {
      state.items.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        quantity,
      })
    }
    showToast(`已把「${dish.name}」放进餐篮`)
  }

  function updateQuantity(id, quantity) {
    const found = state.items.find((item) => item.id === id)
    if (!found) return
    found.quantity = Math.min(Math.max(quantity, 1), 20)
  }

  function remove(id) {
    const index = state.items.findIndex((item) => item.id === id)
    if (index === -1) return
    const [dish] = state.items.splice(index, 1)
    showToast(`已从餐篮移除「${dish.name}」`)
  }

  function clear() {
    state.items = []
  }

  return { items, count, subtotal, add, updateQuantity, remove, clear }
}
