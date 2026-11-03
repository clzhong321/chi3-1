<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '../../composables/useCart'

const route = useRoute()
const { count } = useCart()

const open = ref(false)

const links = [
  { name: '首页', path: '/' },
  { name: '今日菜单', path: '/menu' },
  { name: '关于小馆', path: '/about' },
]

const currentPath = computed(() => route.path)
const isActive = (path) => (path === '/' ? route.path === '/' : route.path.startsWith(path))

// 路由变化后收起移动端菜单
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="brand" aria-label="食光小馆首页">
        <span class="brand__seal">食</span>
        <span class="brand__text">
          <strong>食光小馆</strong>
          <small>SHI GUANG KITCHEN</small>
        </span>
      </RouterLink>

      <nav class="nav" aria-label="主导航">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav__link"
          :class="{ 'is-active': isActive(link.path) }"
        >
          {{ link.name }}
          <span v-if="currentPath === link.path" class="nav__dot" />
        </RouterLink>
      </nav>

      <div class="actions">
        <RouterLink to="/cart" class="cart-link" aria-label="我的餐篮">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path d="M6 8h12l-1 11H7L6 8Z" stroke-linecap="round" />
            <path d="M9 8a3 3 0 0 1 6 0" stroke-linecap="round" />
          </svg>
          <Transition name="pop">
            <span v-if="count" :key="count" class="cart-link__badge">{{ count }}</span>
          </Transition>
        </RouterLink>

        <button
          class="burger"
          type="button"
          :aria-expanded="open"
          aria-label="打开菜单"
          @click="open = !open"
        >
          <span :class="{ 'is-open': open }" />
        </button>
      </div>
    </div>

    <Transition name="drop">
      <nav v-if="open" class="mobile-nav" aria-label="移动端导航">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="mobile-nav__link"
          :class="{ 'is-active': isActive(link.path) }"
        >
          {{ link.name }}
        </RouterLink>
        <RouterLink to="/cart" class="mobile-nav__link">我的餐篮（{{ count }}）</RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header{position:fixed;top:0;right:0;left:0;z-index:40;background:#f8f1e4db;border-bottom:1px solid var(--line);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
.header__inner{display:flex;height:76px;align-items:center;justify-content:space-between;gap:24px}
.brand{display:flex;align-items:center;gap:12px}
.brand__seal{display:grid;width:38px;height:38px;place-items:center;border-radius:6px;color:var(--paper);background:var(--tomato);font-family:var(--font-display);font-size:20px;line-height:1;box-shadow:0 8px 16px -10px #bf4a30e6}
.brand__text{display:flex;flex-direction:column;line-height:1.25}
.brand__text strong{font-family:var(--font-display);font-size:19px;font-weight:600;letter-spacing:.08em}
.brand__text small{color:var(--ink-3);font-size:9px;letter-spacing:.18em}
.nav{display:flex;align-items:center;gap:40px}
.nav__link{position:relative;padding:6px 0;font-size:14px;letter-spacing:.08em;color:var(--ink-2);transition:color .2s ease}
.nav__link:hover,.nav__link.is-active{color:var(--ink)}
.nav__dot{position:absolute;bottom:-4px;left:50%;width:5px;height:5px;border-radius:50%;background:var(--tomato);transform:translate(-50%)}
.actions{display:flex;align-items:center;gap:14px}
.cart-link{position:relative;display:grid;width:42px;height:42px;place-items:center;border:1px solid var(--line);border-radius:50%;transition:border-color .2s ease,background-color .2s ease}
.cart-link:hover{border-color:var(--tomato);background:#bf4a300f}
.cart-link__badge{position:absolute;top:-4px;right:-4px;display:grid;min-width:19px;height:19px;padding:0 5px;place-items:center;border-radius:999px;color:var(--paper);background:var(--tomato);font-size:11px;font-weight:600;line-height:1}
.pop-enter-active,.pop-leave-active{transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .2s ease}
.pop-enter-from,.pop-leave-to{opacity:0;transform:scale(.4)}
.burger{display:none;width:42px;height:42px;border:1px solid var(--line);border-radius:50%}
.burger span,.burger span:before,.burger span:after{display:block;width:16px;height:1.5px;margin:0 auto;background:var(--ink);transition:transform .25s ease,opacity .25s ease}
.burger span{position:relative}
.burger span:before,.burger span:after{position:absolute;left:0;content:""}
.burger span:before{top:-5px}
.burger span:after{top:5px}
.burger span.is-open{background:transparent}
.burger span.is-open:before{top:0;transform:rotate(45deg)}
.burger span.is-open:after{top:0;transform:rotate(-45deg)}
.mobile-nav{display:none;padding:10px 24px 22px;border-top:1px solid var(--line);background:var(--paper)}
.mobile-nav__link{display:block;padding:12px 4px;font-size:14px;border-bottom:1px dashed var(--line)}
.mobile-nav__link.is-active{color:var(--tomato)}
.drop-enter-active,.drop-leave-active{transition:opacity .25s ease,transform .25s ease}
.drop-enter-from,.drop-leave-to{opacity:0;transform:translateY(-8px)}
@media(max-width:860px){.nav{display:none}.burger,.mobile-nav{display:block}}
</style>
