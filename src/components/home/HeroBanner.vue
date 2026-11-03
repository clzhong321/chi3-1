<script setup>
import { heroImage } from '../../data/dishes'
</script>

<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <span v-reveal class="eyebrow">城南老街 · 家常菜 · 第 12 年</span>
        <h1 v-reveal="80" class="hero__title">
          一桌<br /><em>人间烟火</em>
        </h1>
        <p v-reveal="160" class="hero__desc">
          慢火细炖的红烧肉、吊了一整天的高汤、刚出锅还冒着热气的米饭。
          食光小馆相信，认真做的家常菜，能治愈普通的一天。
        </p>
        <div v-reveal="240" class="hero__actions">
          <RouterLink to="/menu" class="btn btn--primary">
            看看今天吃什么
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M4 12h15M13 6l6 6-6 6" stroke-linecap="round" />
            </svg>
          </RouterLink>
          <RouterLink to="/about" class="btn btn--ghost">听听小馆的故事</RouterLink>
        </div>
        <div v-reveal="320" class="hero__note">
          <span class="hero__dot" />
          每日 11:00 — 21:30 · 城南老街 17 号
        </div>
      </div>

      <div v-reveal="120" class="hero__visual">
        <div class="hero__frame">
          <img :src="heroImage" alt="一桌冒着热气的家常菜" />
        </div>
        <div class="hero__stamp">
          <svg viewBox="0 0 120 120" class="hero__stamp-ring" aria-hidden="true">
            <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" stroke-width="1" />
            <circle
              cx="60"
              cy="60"
              r="44"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
              stroke-dasharray="2 4"
            />
          </svg>
          <span>今日<br />现熬</span>
        </div>
        <RouterLink to="/menu/hongshaorou" class="hero__card">
          <span class="hero__card-label">主厨推荐</span>
          <strong>外婆红烧肉</strong>
          <small>慢炖 3 小时 · ¥48</small>
          <span class="hero__card-arrow">→</span>
        </RouterLink>
        <div class="hero__vertical">慢火 · 细炖 · 等一位好好吃饭的人</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{position:relative;overflow:hidden;padding:72px 0 88px}
.hero:after{position:absolute;right:-140px;bottom:-180px;width:420px;height:420px;border:1px solid var(--line);border-radius:50%;content:"";opacity:.6;pointer-events:none}
.hero__grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:64px}
.hero__title{margin-top:20px;font-size:clamp(46px,6.2vw,82px);font-weight:500;line-height:1.06;letter-spacing:.02em}
.hero__title em{position:relative;color:var(--tomato);font-style:normal}
.hero__title em:after{position:absolute;right:0;bottom:6px;left:0;height:8px;border-radius:4px;background:#c99a4538;content:"";z-index:-1}
.hero__desc{max-width:440px;margin-top:24px;color:var(--ink-2);font-size:15px;line-height:2}
.hero__actions{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:34px}
.hero__note{display:flex;align-items:center;gap:9px;margin-top:34px;color:var(--ink-3);font-size:12.5px;letter-spacing:.04em}
.hero__dot{width:6px;height:6px;border-radius:50%;background:#7c8a5c;box-shadow:0 0 0 4px #7c8a5c24}
.hero__visual{position:relative;padding:24px 30px 30px 0}
.hero__frame{overflow:hidden;aspect-ratio:4 / 4.6;border-radius:190px 190px 26px 26px;background:#e9ddcc;box-shadow:var(--shadow-soft)}
.hero__frame img{width:100%;height:100%;object-fit:cover}
.hero__stamp{position:absolute;top:0;left:-18px;display:grid;width:92px;height:92px;place-items:center;border-radius:50%;color:var(--paper);background:var(--tomato);transform:rotate(-8deg);animation:stamp-float-565e766c 6s ease-in-out infinite}
.hero__stamp-ring{position:absolute;inset:0;color:#fffaf18c}
.hero__stamp span{font-family:var(--font-display);font-size:15px;line-height:1.3;text-align:center}
.hero__card{position:absolute;right:-10px;bottom:46px;display:flex;flex-direction:column;gap:3px;padding:16px 22px 16px 20px;border-radius:18px;background:var(--paper);box-shadow:var(--shadow-soft);transition:transform .3s ease}
.hero__card:hover{transform:translateY(-4px)}
.hero__card-label{color:var(--gold);font-size:10px;letter-spacing:.18em}
.hero__card strong{font-family:var(--font-display);font-size:17px;font-weight:600}
.hero__card small{color:var(--ink-3);font-size:11.5px}
.hero__card-arrow{position:absolute;right:16px;bottom:16px;display:grid;width:28px;height:28px;place-items:center;border-radius:50%;color:var(--paper);background:var(--ink);font-size:13px;transition:background-color .2s ease}
.hero__card:hover .hero__card-arrow{background:var(--tomato)}
.hero__vertical{position:absolute;top:50%;right:-14px;color:var(--ink-3);font-size:11px;letter-spacing:.28em;writing-mode:vertical-rl;transform:translateY(-50%)}
@media(max-width:900px){.hero{padding:40px 0 64px}.hero__grid{grid-template-columns:1fr;gap:48px}.hero__visual{max-width:460px;margin:0 auto;padding:20px 26px 26px 0}.hero__vertical{display:none}}
@media(max-width:520px){.hero__stamp{left:-6px;width:76px;height:76px}.hero__stamp span{font-size:12px}.hero__card{right:0;bottom:22px}}
</style>
