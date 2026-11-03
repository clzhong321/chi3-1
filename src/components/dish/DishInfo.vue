<script setup>
import RatingStars from '../ui/RatingStars.vue'

defineProps({
  dish: { type: Object, required: true },
})
</script>

<template>
  <div class="info">
    <div class="info__tags">
      <span v-for="tag in dish.tags" :key="tag" class="info__tag">{{ tag }}</span>
      <span class="info__tag info__tag--category">{{ dish.category }}</span>
    </div>
    <h1 class="info__name">{{ dish.name }}</h1>
    <RatingStars :rating="dish.rating" :review-count="dish.reviewCount" :size="15" />
    <p class="info__summary">{{ dish.summary }}</p>
    <div class="info__facts">
      <div>
        <span>今日供应</span>
        <strong>11:00 — 21:30</strong>
      </div>
      <div>
        <span>制作方式</span>
        <strong>现点现做</strong>
      </div>
      <div>
        <span>适合</span>
        <strong>2 — 3 人分享</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info__tags{display:flex;flex-wrap:wrap;gap:8px}
.info__tag{padding:5px 12px;border-radius:999px;color:var(--tomato);background:#bf4a3014;font-size:11.5px;letter-spacing:.06em}
.info__tag--category{color:var(--ink-3);background:#c99a451a}
.info__name{margin:18px 0 12px;font-size:clamp(34px,4vw,50px);font-weight:500}
.info__summary{max-width:500px;margin-top:18px;color:var(--ink-2);font-size:14.5px;line-height:2}
.info__facts{display:flex;flex-wrap:wrap;gap:32px;margin-top:26px;padding-top:22px;border-top:1px dashed var(--line)}
.info__facts div{display:flex;flex-direction:column;gap:3px}
.info__facts span{color:var(--ink-3);font-size:11px;letter-spacing:.1em}
.info__facts strong{font-size:13px;font-weight:600}
</style>
