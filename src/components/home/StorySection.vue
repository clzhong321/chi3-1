<script setup>
import { storyImages, values } from '../../data/dishes'
</script>

<template>
  <section class="section story">
    <div class="container story__grid">
      <div v-reveal class="story__visual">
        <div class="story__main">
          <img :src="storyImages.kitchen" alt="小馆厨房里正在炒菜的师傅" loading="lazy" />
        </div>
        <div class="story__small">
          <img :src="storyImages.table" alt="围坐在一起分享饭菜的食客" loading="lazy" />
        </div>
        <span class="story__caption">2014 — 2026<br />一直在城南老街</span>
      </div>

      <div class="story__content">
        <span v-reveal class="eyebrow">Since 2014 · 小馆故事</span>
        <h2 v-reveal="70" class="story__title">菜谱是外婆的，<br />心意是我们自己的。</h2>
        <p v-reveal="130" class="story__text">
          开店的第一个冬天，我们只有六张桌子、八道菜。外婆把她的笔记本交给我，
          上面写着「火候到了，味道就到了」。十二年过去，菜单变长了，这句话没变。
        </p>
        <ul class="story__values">
          <li v-for="(value, index) in values" :key="value.title" v-reveal="180 + index * 70">
            <span class="story__value-icon">{{ value.icon }}</span>
            <div>
              <h4>{{ value.title }}</h4>
              <p>{{ value.text }}</p>
            </div>
          </li>
        </ul>
        <RouterLink v-reveal="380" to="/about" class="story__link">
          读完整个故事 <span>→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story{position:relative;overflow:hidden;background:#fffaf18c;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.story__grid{display:grid;grid-template-columns:.95fr 1.05fr;align-items:center;gap:72px}
.story__visual{position:relative;padding:0 42px 48px 0}
.story__main{overflow:hidden;aspect-ratio:4 / 4.8;border-radius:22px 90px 22px 22px;box-shadow:var(--shadow-soft)}
.story__main img,.story__small img{width:100%;height:100%;object-fit:cover}
.story__small{position:absolute;right:0;bottom:0;width:46%;aspect-ratio:4 / 3.4;overflow:hidden;border:6px solid var(--paper);border-radius:16px;box-shadow:var(--shadow-card);transform:rotate(3deg)}
.story__caption{position:absolute;right:6px;bottom:-30px;color:var(--ink-3);font-size:10px;letter-spacing:.18em;line-height:1.8;writing-mode:vertical-rl}
.story__title{margin-top:18px;font-size:clamp(30px,3.4vw,44px);line-height:1.3}
.story__text{max-width:470px;margin-top:20px;color:var(--ink-2);font-size:14.5px;line-height:2}
.story__values{display:flex;flex-direction:column;gap:20px;margin-top:32px}
.story__values li{display:flex;align-items:flex-start;gap:16px}
.story__value-icon{display:grid;width:40px;height:40px;flex:0 0 auto;place-items:center;border:1px solid var(--line);border-radius:50%;font-family:var(--font-display);font-size:17px;color:var(--tomato);background:var(--paper)}
.story__values h4{font-size:15px;font-family:var(--font-body);font-weight:600}
.story__values p{margin-top:3px;color:var(--ink-2);font-size:12.5px;line-height:1.7}
.story__link{display:inline-flex;align-items:center;gap:10px;margin-top:34px;padding-bottom:5px;border-bottom:1px solid var(--ink);font-size:13.5px;transition:color .2s ease,gap .2s ease}
.story__link:hover{gap:16px;color:var(--tomato);border-color:var(--tomato)}
@media(max-width:900px){.story__grid{grid-template-columns:1fr;gap:56px}.story__visual{max-width:460px;margin:0 auto;padding-right:32px}.story__caption{display:none}}
</style>
