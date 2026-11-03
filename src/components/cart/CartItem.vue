<script setup>
import { computed } from 'vue'
import { formatPrice } from '../../data/dishes'
import QuantityStepper from '../ui/QuantityStepper.vue'

const props = defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['update:quantity', 'remove'])

// 桥接步进器的 v-model → 父组件的 update:quantity 事件
const quantity = computed({
  get: () => props.item.quantity,
  set: (value) => emit('update:quantity', value),
})

const total = computed(() => props.item.price * props.item.quantity)
</script>

<template>
  <article class="cart-item">
    <RouterLink :to="`/menu/${item.id}`" class="cart-item__image">
      <img :src="item.image" :alt="item.name" loading="lazy" />
    </RouterLink>

    <div class="cart-item__info">
      <RouterLink :to="`/menu/${item.id}`" class="cart-item__name">{{ item.name }}</RouterLink>
      <span class="cart-item__unit">单价 {{ formatPrice(item.price) }}</span>
    </div>

    <QuantityStepper v-model="quantity" size="sm" :min="1" :max="20" class="cart-item__stepper" />

    <span class="cart-item__total">{{ formatPrice(total) }}</span>

    <button type="button" class="cart-item__remove" aria-label="移除这道菜" @click="emit('remove', item.id)">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
      >
        <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
      </svg>
    </button>
  </article>
</template>

<style scoped>
.cart-item{display:flex;align-items:center;gap:20px;padding:18px;border:1px solid rgba(255,255,255,.8);border-radius:var(--radius-md);background:var(--paper);box-shadow:var(--shadow-card)}
.cart-item__image{width:88px;height:88px;flex:0 0 auto;overflow:hidden;border-radius:12px;background:#e9ddcc}
.cart-item__image img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
.cart-item__image:hover img{transform:scale(1.06)}
.cart-item__info{display:flex;flex:1;flex-direction:column;gap:5px;min-width:0}
.cart-item__name{font-family:var(--font-display);font-size:18px;font-weight:600;transition:color .2s ease}
.cart-item__name:hover{color:var(--tomato)}
.cart-item__unit{color:var(--ink-3);font-size:11.5px}
.cart-item__stepper{flex:0 0 auto}
.cart-item__total{min-width:64px;color:var(--tomato);font-family:var(--font-display);font-size:18px;text-align:right}
.cart-item__remove{display:grid;width:30px;height:30px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--ink-3);transition:color .2s ease,background-color .2s ease}
.cart-item__remove:hover{color:var(--paper);background:var(--tomato)}
@media(max-width:620px){.cart-item{flex-wrap:wrap;gap:14px}.cart-item__info{flex-basis:calc(100% - 108px)}.cart-item__stepper{margin-left:108px}.cart-item__total{flex:1}}
</style>
