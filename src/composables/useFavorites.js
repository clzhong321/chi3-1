import { computed, reactive, watch } from 'vue'

const KEY = 'shiguang-favorites'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const state = reactive({ ids: load() })

watch(
  () => state.ids,
  (ids) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids))
    } catch {
      // 忽略写入失败
    }
  },
  { deep: true },
)

export function useFavorites() {
  const ids = computed(() => state.ids)
  const count = computed(() => state.ids.length)

  function isFavorite(id) {
    return state.ids.includes(id)
  }

  function toggle(id) {
    const index = state.ids.indexOf(id)
    if (index === -1) {
      state.ids.push(id)
    } else {
      state.ids.splice(index, 1)
    }
  }

  return { ids, count, isFavorite, toggle }
}
