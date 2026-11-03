<script setup>
import { ref } from 'vue'
import { formatPrice } from '../data/dishes'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'
import CartItem from '../components/cart/CartItem.vue'
import OrderSummary from '../components/cart/OrderSummary.vue'
import EmptyState from '../components/ui/EmptyState.vue'

const { items, count, updateQuantity, remove, clear } = useCart()
const { showToast } = useToast()

// 下单成功后的订单信息
const order = ref(null)

function checkout(total) {
  const number = `SG${Date.now().toString().slice(-6)}`
  order.value = { number, total }
  clear()
  showToast('下单成功，后厨已经开火了')
}
</script>

<template>
  <div class="cart-page">
    <div class="container">
      <header class="cart-head">
        <div>
          <span v-reveal class="eyebrow">Your Basket</span>
          <h1 v-reveal="60">我的餐篮</h1>
          <p v-reveal="110">想吃的不必一次点完，先放进来。餐篮会替你记着，直到你准备好开饭。</p>
        </div>
        <div v-if="count" v-reveal="140" class="cart-head__count">
          <strong>{{ count }}</strong>
          <span>份<br />已选</span>
        </div>
      </header>

      <div v-if="items.length" class="cart-layout">
        <TransitionGroup name="list" tag="div" class="cart-list">
          <CartItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @update:quantity="updateQuantity(item.id, $event)"
            @remove="remove"
          />
        </TransitionGroup>
        <OrderSummary @checkout="checkout" />
      </div>

      <div v-else class="cart-empty surface">
        <div v-if="order" class="order-success">
          <span class="order-success__icon">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12.5 10 17l9-10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <div>
            <h3>订单已提交 · {{ order.number }}</h3>
            <p>合计 {{ formatPrice(order.total) }}，后厨正在准备，请到店付款取餐。</p>
          </div>
        </div>
        <EmptyState
          title="餐篮还是空的"
          description="去菜单挑几道今天想吃的吧。红烧肉和桂花圆子，是我们最想推荐给你的。"
        >
          <template #action>
            <RouterLink to="/menu" class="btn btn--primary">去逛逛今日菜单</RouterLink>
          </template>
        </EmptyState>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page{padding:56px 0 96px}
.cart-head{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:40px}
.cart-head h1{margin-top:14px;font-size:clamp(36px,4.4vw,54px);font-weight:500}
.cart-head p{max-width:480px;margin-top:14px;color:var(--ink-2);font-size:14px;line-height:1.9}
.cart-head__count{display:flex;align-items:center;gap:10px;padding:14px 22px;border:1px solid var(--line);border-radius:18px;background:#fffaf199}
.cart-head__count strong{color:var(--tomato);font-family:var(--font-display);font-size:34px;line-height:1}
.cart-head__count span{color:var(--ink-3);font-size:11px;line-height:1.7}
.cart-layout{display:grid;grid-template-columns:1.35fr .65fr;gap:40px;align-items:start}
.cart-list{display:flex;flex-direction:column;gap:16px}
.cart-empty{padding:12px 20px 26px}
.order-success{display:flex;align-items:center;gap:16px;margin:24px 12px 0;padding:18px 22px;border:1px solid rgba(201,154,69,.35);border-radius:var(--radius-md);background:#c99a4514}
.order-success__icon{display:grid;width:42px;height:42px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--paper);background:var(--gold)}
.order-success h3{font-size:16px}
.order-success p{margin-top:4px;color:var(--ink-2);font-size:12px}
.list-enter-active,.list-leave-active{transition:opacity .3s ease,transform .3s ease}
.list-enter-from{opacity:0;transform:translateY(12px)}
.list-leave-to{opacity:0;transform:translate(24px)}
.list-move{transition:transform .3s ease}
@media(max-width:900px){.cart-layout{grid-template-columns:1fr;gap:28px}.cart-page{padding:40px 0 64px}.cart-head__count{display:none}}
</style>
