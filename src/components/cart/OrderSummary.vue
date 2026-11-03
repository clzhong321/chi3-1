<script setup>
import { computed, ref } from 'vue'
import { formatPrice } from '../../data/dishes'
import { useCart } from '../../composables/useCart'
import { useToast } from '../../composables/useToast'

const emit = defineEmits(['checkout'])

const { subtotal, count } = useCart()
const { showToast } = useToast()

const FREE_DELIVERY = 88

const coupon = ref('')
const applied = ref(false)

const deliveryFee = computed(() => (subtotal.value >= FREE_DELIVERY ? 0 : 6))
const discount = computed(() => (applied.value ? Math.round(subtotal.value * 0.1) : 0))
const total = computed(() => Math.max(subtotal.value + deliveryFee.value - discount.value, 0))
const gap = computed(() => Math.max(FREE_DELIVERY - subtotal.value, 0))

function applyCoupon() {
  if (coupon.value.trim().toUpperCase() === 'SHIGUANG') {
    applied.value = true
    showToast('优惠码已生效，本单立减 10%')
  } else {
    showToast('优惠码无效，试试 SHIGUANG')
  }
}

function checkout() {
  if (count.value === 0) return
  emit('checkout', total.value)
}
</script>

<template>
  <aside class="summary">
    <h3 class="summary__title">订单小结</h3>

    <div class="summary__rows">
      <div class="summary__row">
        <span>菜品小计（{{ count }} 份）</span>
        <strong>{{ formatPrice(subtotal) }}</strong>
      </div>
      <div class="summary__row">
        <span>配送费</span>
        <strong>{{ deliveryFee ? formatPrice(deliveryFee) : '免配送费' }}</strong>
      </div>
      <div v-if="applied" class="summary__row summary__row--discount">
        <span>优惠码 SHIGUANG</span>
        <strong>-{{ formatPrice(discount) }}</strong>
      </div>
    </div>

    <div v-if="gap > 0" class="summary__tip">
      <span class="summary__bar">
        <span :style="{ width: `${Math.min((subtotal / FREE_DELIVERY) * 100, 100)}%` }" />
      </span>
      再点 {{ formatPrice(gap) }} 即可免配送费
    </div>

    <form class="summary__coupon" @submit.prevent="applyCoupon">
      <input
        v-model.trim="coupon"
        placeholder="输入优惠码"
        :disabled="applied"
        aria-label="优惠码"
      />
      <button type="submit" :disabled="applied">{{ applied ? '已使用' : '使用' }}</button>
    </form>

    <div class="summary__total">
      <span>合计</span>
      <strong>{{ formatPrice(total) }}</strong>
    </div>

    <button
      type="button"
      class="btn btn--primary btn--block summary__checkout"
      :disabled="count === 0"
      @click="checkout"
    >
      提交订单
    </button>

    <p class="summary__note">支持堂食与打包 · 到店付款 · 仅用于课程练习</p>
  </aside>
</template>

<style scoped>
.summary{position:sticky;top:100px;padding:26px;border:1px solid rgba(255,255,255,.8);border-radius:var(--radius-lg);background:var(--paper);box-shadow:var(--shadow-card)}
.summary__title{padding-bottom:16px;border-bottom:1px dashed var(--line);font-size:20px}
.summary__rows{display:flex;flex-direction:column;gap:12px;padding:18px 0;border-bottom:1px dashed var(--line)}
.summary__row{display:flex;align-items:center;justify-content:space-between;color:var(--ink-2);font-size:12.5px}
.summary__row strong{color:var(--ink);font-weight:500}
.summary__row--discount strong{color:var(--tomato)}
.summary__tip{margin-top:16px;color:var(--ink-3);font-size:10.5px}
.summary__bar{display:block;height:4px;margin-bottom:7px;overflow:hidden;border-radius:999px;background:#563c261a}
.summary__bar span{display:block;height:100%;border-radius:inherit;background:var(--gold);transition:width .35s ease}
.summary__coupon{display:flex;gap:8px;margin-top:16px}
.summary__coupon input{width:100%;min-width:0;padding:9px 14px;border:1px solid var(--line);border-radius:999px;outline:none;background:transparent;font-size:12px}
.summary__coupon input:focus{border-color:var(--tomato)}
.summary__coupon button{flex:0 0 auto;padding:0 16px;border-radius:999px;color:var(--paper);background:var(--ink);font-size:11.5px;transition:background-color .2s ease}
.summary__coupon button:hover:not(:disabled){background:var(--tomato)}
.summary__coupon button:disabled{color:var(--ink-3);background:#563c2614;cursor:default}
.summary__total{display:flex;align-items:baseline;justify-content:space-between;margin-top:20px;padding-top:16px;border-top:1px dashed var(--line);font-size:13px;color:var(--ink-2)}
.summary__total strong{color:var(--tomato);font-family:var(--font-display);font-size:28px;line-height:1}
.summary__checkout{margin-top:18px}
.summary__checkout:disabled{color:var(--ink-3);background:#563c261a;box-shadow:none;cursor:not-allowed}
.summary__note{margin-top:12px;color:var(--ink-3);font-size:10.5px;text-align:center}
</style>
