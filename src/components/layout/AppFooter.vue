<script setup>
import { ref } from 'vue'
import { useToast } from '../../composables/useToast'

const { showToast } = useToast()

const email = ref('')
const done = ref(false)

function subscribe() {
  if (!email.value.includes('@')) {
    showToast('请填写正确的邮箱地址')
    return
  }
  done.value = true
  showToast('订阅成功，菜单上新会第一时间告诉你')
  email.value = ''
}
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="footer__seal">食</span>
          <strong>食光小馆</strong>
        </div>
        <p>
          一桌人间烟火。<br />
          把家常菜认真做，把每一位食客当朋友。
        </p>
        <div class="footer__meta">
          <span>城南老街 17 号</span>
          <span>11:00 — 21:30</span>
          <span>021-6688 1024</span>
        </div>
      </div>

      <div class="footer__links">
        <h4>逛一逛</h4>
        <RouterLink to="/menu">今日菜单</RouterLink>
        <RouterLink to="/about">关于小馆</RouterLink>
        <RouterLink to="/cart">我的餐篮</RouterLink>
      </div>

      <div class="footer__links">
        <h4>招牌味道</h4>
        <RouterLink to="/menu/hongshaorou">外婆红烧肉</RouterLink>
        <RouterLink to="/menu/beefnoodle">一碗牛肉面</RouterLink>
        <RouterLink to="/menu/osmanthus">桂花酒酿圆子</RouterLink>
      </div>

      <div class="footer__subscribe">
        <h4>菜单来信</h4>
        <p>每周一封，只有新菜和时令，没有广告。</p>
        <form class="subscribe" @submit.prevent="subscribe">
          <input
            v-model.trim="email"
            type="email"
            placeholder="留下你的邮箱"
            aria-label="邮箱地址"
          />
          <button type="submit" class="subscribe__btn" aria-label="订阅">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M4 12h15M13 6l6 6-6 6" stroke-linecap="round" />
            </svg>
          </button>
        </form>
        <p v-if="done" class="subscribe__done">订阅成功，下一封菜单来信会寄到你的邮箱</p>
      </div>
    </div>

    <div class="container footer__bottom">
      <span>© 2026 食光小馆 · 仅用于课程练习</span>
      <span>用 Vue 3 慢火炖出来的网站</span>
    </div>
  </footer>
</template>

<style scoped>
.footer{margin-top:40px;padding-top:64px;color:#f3e9d8;background:#2c2119}
.footer__grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.4fr;gap:48px;padding-bottom:56px}
.footer__logo{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.footer__seal{display:grid;width:32px;height:32px;place-items:center;border-radius:5px;color:var(--paper);background:var(--tomato);font-family:var(--font-display)}
.footer__logo strong{font-family:var(--font-display);font-size:18px;letter-spacing:.1em}
.footer__brand p{max-width:260px;color:#f3e9d8a8;font-size:13px;line-height:1.9}
.footer__meta{display:flex;flex-direction:column;gap:4px;margin-top:20px;color:#f3e9d873;font-size:12px;letter-spacing:.06em}
.footer h4{margin:0 0 18px;font-family:var(--font-body);font-size:13px;font-weight:600;letter-spacing:.16em;color:#f3e9d8e6}
.footer__links{display:flex;flex-direction:column;gap:10px;font-size:13px}
.footer__links a{width:fit-content;color:#f3e9d899;transition:color .2s ease,transform .2s ease}
.footer__links a:hover{color:var(--paper);transform:translate(3px)}
.footer__subscribe p{margin-bottom:16px;color:#f3e9d88c;font-size:12.5px;line-height:1.8}
.subscribe{display:flex;align-items:center;gap:8px;padding:5px 5px 5px 16px;border:1px solid rgba(243,233,216,.2);border-radius:999px;transition:border-color .25s ease}
.subscribe:focus-within{border-color:#f3e9d899}
.subscribe input{width:100%;min-width:0;border:none;outline:none;background:transparent;color:var(--paper);font-size:13px}
.subscribe input::placeholder{color:#f3e9d859}
.subscribe__btn{display:grid;width:36px;height:36px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--paper);background:var(--tomato);transition:background-color .2s ease,transform .2s ease}
.subscribe__btn:hover{background:var(--tomato-deep);transform:translate(2px)}
.subscribe__done{margin-top:10px;color:var(--gold)!important}
.footer__bottom{display:flex;justify-content:space-between;padding:18px 24px 26px;border-top:1px solid rgba(243,233,216,.12);color:#f3e9d859;font-size:11.5px;letter-spacing:.06em}
@media(max-width:900px){.footer__grid{grid-template-columns:1fr 1fr;gap:36px}}
@media(max-width:560px){.footer__grid{grid-template-columns:1fr}.footer__bottom{flex-direction:column;gap:6px}}
</style>
