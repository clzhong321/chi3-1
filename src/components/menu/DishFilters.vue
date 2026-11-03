<script setup>
import { computed } from 'vue'
import { useFavorites } from '../../composables/useFavorites'

defineProps({
  categories: { type: Array, default: () => [] },
})

const category = defineModel('category', { type: String, default: '全部' })
const price = defineModel('price', { type: Number, default: 70 })
const sort = defineModel('sort', { type: String, default: 'default' })
const favoritesOnly = defineModel('favoritesOnly', { type: Boolean, default: false })

const emit = defineEmits(['reset'])

const { count } = useFavorites()

const priceLabel = computed(() => (price.value >= 70 ? '不限价格' : `¥${price.value} 以内`))
</script>

<template>
  <div class="filters">
    <div class="filters__row filters__row--chips">
      <span class="filters__label">分类</span>
      <div class="chips">
        <button
          v-for="item in categories"
          :key="item"
          type="button"
          class="chip"
          :class="{ 'is-active': category === item }"
          @click="category = item"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <div class="filters__row filters__row--controls">
      <div class="filters__price">
        <span class="filters__label">价格</span>
        <input
          v-model.number="price"
          class="range"
          type="range"
          min="18"
          max="70"
          step="2"
          aria-label="最高价格"
        />
        <span class="filters__value">{{ priceLabel }}</span>
      </div>

      <label class="switch">
        <input v-model="favoritesOnly" type="checkbox" />
        <span class="switch__track"><span class="switch__thumb" /></span>
        <span class="switch__text">只看收藏（{{ count }}）</span>
      </label>

      <label class="select">
        <span class="filters__label">排序</span>
        <select v-model="sort" aria-label="排序方式">
          <option value="default">推荐顺序</option>
          <option value="price">价格从低到高</option>
          <option value="rating">评分从高到低</option>
          <option value="name">按名称</option>
        </select>
      </label>

      <button type="button" class="filters__reset" @click="emit('reset')">重置</button>
    </div>
  </div>
</template>

<style scoped>
.filters{display:flex;flex-direction:column;gap:18px}
.filters__row{display:flex;align-items:center;gap:16px}
.filters__label{flex:0 0 auto;color:var(--ink-3);font-size:12px;letter-spacing:.12em}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{padding:7px 18px;border:1px solid var(--line);border-radius:999px;color:var(--ink-2);font-size:12.5px;transition:color .2s ease,background-color .2s ease,border-color .2s ease}
.chip:hover{border-color:var(--tomato);color:var(--tomato)}
.chip.is-active{color:var(--paper);border-color:var(--tomato);background:var(--tomato)}
.filters__row--controls{flex-wrap:wrap;padding-top:18px;border-top:1px dashed var(--line)}
.filters__price{display:flex;align-items:center;gap:10px}
.range{width:130px;accent-color:var(--tomato);cursor:pointer}
.filters__value{min-width:72px;color:var(--ink-2);font-size:12px}
.switch{display:flex;align-items:center;gap:9px;cursor:pointer;-webkit-user-select:none;user-select:none}
.switch input{display:none}
.switch__track{position:relative;width:34px;height:19px;border-radius:999px;background:#e3d5c3;transition:background-color .25s ease}
.switch__thumb{position:absolute;top:2.5px;left:2.5px;width:14px;height:14px;border-radius:50%;background:var(--paper);box-shadow:0 1px 3px #3c230f4d;transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
.switch input:checked+.switch__track{background:var(--tomato)}
.switch input:checked+.switch__track .switch__thumb{transform:translate(15px)}
.switch__text{color:var(--ink-2);font-size:12px}
.select{display:flex;align-items:center;gap:10px;margin-left:auto}
.select select{padding:7px 12px;border:1px solid var(--line);border-radius:999px;outline:none;background:var(--paper);color:var(--ink);font-size:12.5px;cursor:pointer}
.filters__reset{padding:7px 14px;border-radius:999px;color:var(--ink-3);font-size:12px;text-decoration:underline;text-underline-offset:4px;transition:color .2s ease}
.filters__reset:hover{color:var(--tomato)}
@media(max-width:720px){.filters__row{align-items:flex-start;flex-direction:column;gap:10px}.filters__row--controls{align-items:center;flex-direction:row;flex-wrap:wrap}.select{margin-left:0}}
</style>
