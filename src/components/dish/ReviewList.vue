<script setup>
import { computed } from 'vue'
import RatingStars from '../ui/RatingStars.vue'

const props = defineProps({
  reviews: { type: Array, default: () => [] },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
})

// 评分分布（示意数据）
const bars = computed(() => [
  { star: 5, percent: 78 },
  { star: 4, percent: 15 },
  { star: 3, percent: 5 },
  { star: 2, percent: 2 },
  { star: 1, percent: 0 },
])

const score = computed(() => Math.max(props.rating, 0).toFixed(1))
</script>

<template>
  <section class="reviews">
    <div class="reviews__summary">
      <div class="reviews__score">
        <strong>{{ score }}</strong>
        <RatingStars :rating="rating" :size="13" />
        <span>{{ reviewCount }} 位食客评价</span>
      </div>
      <div class="reviews__bars">
        <div v-for="bar in bars" :key="bar.star" class="reviews__bar-row">
          <span class="reviews__star-label">{{ bar.star }}</span>
          <span class="reviews__bar">
            <span :style="{ width: `${bar.percent}%` }" />
          </span>
          <span class="reviews__percent">{{ bar.percent }}%</span>
        </div>
      </div>
    </div>

    <ul class="reviews__list">
      <li v-for="review in reviews" :key="review.name + review.date" class="review">
        <div class="review__head">
          <span class="review__avatar">{{ review.avatar }}</span>
          <div>
            <strong>{{ review.name }}</strong>
            <small>{{ review.date }} · 堂食</small>
          </div>
          <RatingStars :rating="review.rating" :size="11" class="review__stars" />
        </div>
        <p class="review__text">{{ review.text }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.reviews{display:grid;grid-template-columns:.8fr 1.2fr;gap:48px}
.reviews__summary{padding:26px;border:1px solid var(--line);border-radius:var(--radius-md);background:#fffaf1b3}
.reviews__score{display:flex;flex-direction:column;gap:8px;padding-bottom:20px;border-bottom:1px dashed var(--line)}
.reviews__score strong{color:var(--tomato);font-family:var(--font-display);font-size:44px;line-height:1}
.reviews__score>span{color:var(--ink-3);font-size:11px}
.reviews__bars{display:flex;flex-direction:column;gap:9px;margin-top:20px}
.reviews__bar-row{display:flex;align-items:center;gap:10px;color:var(--ink-3);font-size:10.5px}
.reviews__star-label{width:10px;text-align:right}
.reviews__bar{flex:1;height:4px;overflow:hidden;border-radius:999px;background:#563c261a}
.reviews__bar span{display:block;height:100%;border-radius:inherit;background:var(--gold)}
.reviews__percent{width:32px}
.reviews__list{display:flex;flex-direction:column;gap:22px}
.review{padding-bottom:22px;border-bottom:1px dashed var(--line)}
.review:last-child{padding-bottom:0;border-bottom:none}
.review__head{display:flex;align-items:center;gap:12px}
.review__avatar{display:grid;width:38px;height:38px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--tomato);background:#bf4a301a;font-family:var(--font-display);font-size:16px}
.review__head strong{display:block;font-size:13px;font-weight:600}
.review__head small{color:var(--ink-3);font-size:10.5px}
.review__stars{margin-left:auto}
.review__text{margin-top:12px;color:var(--ink-2);font-size:13px;line-height:1.9}
@media(max-width:760px){.reviews{grid-template-columns:1fr;gap:32px}}
</style>
