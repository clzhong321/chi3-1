<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  size: { type: Number, default: 14 },
})

// 每颗星的填充百分比：4.8 分 → 前 4 颗 100%，第 5 颗 80%
const fills = computed(() =>
  Array.from({ length: 5 }, (_, index) => `${Math.min(Math.max(props.rating - index, 0), 1) * 100}%`),
)
</script>

<template>
  <div class="rating">
    <span class="rating__stars" :style="{ '--star-size': `${size}px` }" aria-hidden="true">
      <span v-for="(fill, index) in fills" :key="index" class="star">
        <svg class="star__bg" viewBox="0 0 24 24">
          <path
            d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"
          />
        </svg>
        <svg class="star__fg" viewBox="0 0 24 24" :style="{ width: fill }">
          <path
            d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"
          />
        </svg>
      </span>
    </span>
    <span class="rating__value">{{ rating.toFixed(1) }}</span>
    <span v-if="reviewCount" class="rating__count">（{{ reviewCount }} 条评价）</span>
  </div>
</template>

<style scoped>
.rating{display:inline-flex;align-items:center;gap:6px;color:var(--ink-2);font-size:12.5px}
.rating__stars{display:inline-flex;gap:2px}
.star{position:relative;display:inline-block;width:var(--star-size);height:var(--star-size)}
.star svg{position:absolute;top:0;left:0;width:100%;height:100%}
.star__bg{fill:#e7d8c4}
.star__fg{fill:var(--gold);overflow:hidden}
.rating__value{font-weight:600;color:var(--ink)}
.rating__count{color:var(--ink-3)}
</style>
