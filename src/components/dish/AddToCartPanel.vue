<script setup>
import { computed, ref } from 'vue'
import { formatPrice } from '../../data/dishes'
import { useCart } from '../../composables/useCart'
import { useFavorites } from '../../composables/useFavorites'
import QuantityStepper from '../ui/QuantityStepper.vue'

const props = defineProps({
  dish: { type: Object, required: true },
})

const { add } = useCart()
const { isFavorite, toggle } = useFavorites()

const quantity = ref(1)
const dining = ref('dine-in')

const total = computed(() => props.dish.price * quantity.value)
const favored = computed(() => isFavorite(props.dish.id))

const options = [
  { value: 'dine-in', label: '堂食', note: '现做现上桌' },
  { value: 'takeaway', label: '打包', note: '免费提供餐盒' },
]

function submit() {
  add(props.dish, quantity.value)
  quantity.value = 1
}
</script>

<template>
  <div class="panel">
    <div class="panel__price">
      <span class="panel__label">单价</span>
      <strong>{{ formatPrice(dish.price) }}</strong>
      <span class="panel__unit">/ 份</span>
    </div>

    <div class="panel__options">
      <label
        v-for="option in options"
        :key="option.value"
        class="option"
        :class="{ 'is-active': dining === option.value }"
      >
        <input v-model="dining" type="radio" :value="option.value" name="dining" />
        <span class="option__text">
          <strong>{{ option.label }}</strong>
          <small>{{ option.note }}</small>
        </span>
        <span class="option__dot" />
      </label>
    </div>

    <div class="panel__row">
      <span class="panel__label">数量</span>
      <QuantityStepper v-model="quantity" :min="1" :max="10" />
      <span class="panel__total">合计 {{ formatPrice(total) }}</span>
    </div>

    <div class="panel__actions">
      <button type="button" class="btn btn--primary panel__add" @click="submit">
        加入餐篮 · {{ formatPrice(total) }}
      </button>
      <button
        type="button"
        class="panel__fav"
        :class="{ 'is-active': favored }"
        :aria-label="favored ? '取消收藏' : '收藏这道菜'"
        @click="toggle(dish.id)"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <p class="panel__note">
      <span class="panel__dot" />
      高峰时段制作约需 20 分钟，建议提前下单
    </p>
  </div>
</template>

<style scoped>
.panel{padding:24px 26px 22px;border:1px solid rgba(255,255,255,.8);border-radius:var(--radius-lg);background:var(--paper);box-shadow:var(--shadow-card)}
.panel__price{display:flex;align-items:baseline;gap:4px;padding-bottom:18px;border-bottom:1px dashed var(--line)}
.panel__label{color:var(--ink-3);font-size:11px;letter-spacing:.12em}
.panel__price strong{margin-left:8px;color:var(--tomato);font-family:var(--font-display);font-size:30px;line-height:1}
.panel__unit{color:var(--ink-3);font-size:11px}
.panel__options{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.option{position:relative;display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border:1px solid var(--line);border-radius:12px;cursor:pointer;transition:border-color .2s ease,background-color .2s ease}
.option input{display:none}
.option.is-active{border-color:var(--tomato);background:#bf4a300d}
.option__text{display:flex;flex-direction:column}
.option__text strong{font-size:13px;font-weight:600}
.option__text small{color:var(--ink-3);font-size:10.5px}
.option__dot{width:14px;height:14px;border:1px solid var(--line);border-radius:50%;transition:background-color .2s ease,border-color .2s ease}
.option.is-active .option__dot{border-color:var(--tomato);background:var(--tomato);box-shadow:inset 0 0 0 3px var(--paper)}
.panel__row{display:flex;align-items:center;gap:14px;margin-top:20px}
.panel__total{margin-left:auto;color:var(--ink-2);font-size:12.5px}
.panel__actions{display:flex;gap:10px;margin-top:18px}
.panel__add{flex:1}
.panel__fav{display:grid;width:48px;flex:0 0 auto;place-items:center;border:1px solid var(--line);border-radius:999px;color:var(--ink-2);transition:color .2s ease,border-color .2s ease}
.panel__fav:hover,.panel__fav.is-active{color:var(--tomato);border-color:var(--tomato)}
.panel__fav.is-active svg{fill:currentColor}
.panel__note{display:flex;align-items:center;gap:7px;margin-top:14px;color:var(--ink-3);font-size:11px}
.panel__dot{width:5px;height:5px;border-radius:50%;background:var(--gold)}
</style>
