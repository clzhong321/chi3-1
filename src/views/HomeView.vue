<script setup>
import HeroBanner from '../components/home/HeroBanner.vue'
import StatsStrip from '../components/home/StatsStrip.vue'
import FeaturedDishes from '../components/home/FeaturedDishes.vue'
import StorySection from '../components/home/StorySection.vue'
import TestimonialSlider from '../components/home/TestimonialSlider.vue'
</script>

<template>
  <div class="home">
    <HeroBanner />
    <StatsStrip />
    <FeaturedDishes />
    <StorySection />
    <TestimonialSlider />

    <section class="cta section">
      <div class="container">
        <div v-reveal class="cta__panel">
          <div class="cta__text">
            <span class="eyebrow cta__eyebrow">今晚见</span>
            <h2>天冷了，<br />来吃一顿热的。</h2>
            <p>小馆只有十二张桌子，建议提前打个电话。剩下的，交给我们。</p>
          </div>
          <div class="cta__actions">
            <a href="tel:02166881024" class="btn btn--primary">电话订位 · 021-6688 1024</a>
            <RouterLink to="/menu" class="btn cta__ghost">先看看菜单</RouterLink>
          </div>
          <span class="cta__glyph" aria-hidden="true">食</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home{overflow:hidden}
.cta{padding-top:0}
.cta__panel{position:relative;display:flex;align-items:flex-end;justify-content:space-between;gap:40px;overflow:hidden;padding:56px 64px;border-radius:var(--radius-lg);color:#f8efe0;background:radial-gradient(circle at 85% 15%,rgba(201,154,69,.24),transparent 42%),linear-gradient(135deg,#a73c26,#7c2a1a);box-shadow:var(--shadow-soft)}
.cta__eyebrow{color:var(--gold)}
.cta__eyebrow:before{background:var(--gold)}
.cta__text h2{margin-top:16px;font-size:clamp(28px,3.4vw,44px);line-height:1.3}
.cta__text p{max-width:400px;margin-top:14px;color:#f8efe0b3;font-size:14px;line-height:1.9}
.cta__actions{display:flex;flex-direction:column;gap:12px;flex:0 0 auto}
.cta__actions .btn--primary{color:var(--ink);background:var(--paper);box-shadow:none}
.cta__actions .btn--primary:hover{color:var(--paper);background:var(--ink)}
.cta__ghost{color:#f8efe0cc;border:1px solid rgba(248,239,224,.3)}
.cta__ghost:hover{border-color:var(--paper);color:var(--paper)}
.cta__glyph{position:absolute;right:340px;bottom:-50px;color:#f8efe00f;font-family:var(--font-display);font-size:220px;line-height:1;pointer-events:none}
@media(max-width:900px){.cta__panel{flex-direction:column;align-items:flex-start;padding:40px 32px}.cta__actions{width:100%}.cta__glyph{right:-20px;font-size:150px}}
</style>
