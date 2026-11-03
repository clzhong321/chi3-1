<script setup>
import { computed } from 'vue'
import { formatPrice } from '../../data/dishes'
import { useFavorites } from '../../composables/useFavorites'
import RatingStars from '../ui/RatingStars.vue'

const props = defineProps({
  dish: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})

const emit = defineEmits(['add'])

const { isFavorite, toggle } = useFavorites()
const favored = computed(() => isFavorite(props.dish.id))
</script>

<template>
  <article class="dish" :class="{ 'dish--compact': compact }">
    <div class="dish__media">
      <RouterLink :to="`/menu/${dish.id}`" class="dish__image" :aria-label="`查看${dish.name}详情`">
        <img :src="dish.image" :alt="dish.name" loading="lazy" />
      </RouterLink>
      <span v-if="dish.tags?.length" class="dish__badge">{{ dish.tags[0] }}</span>
      <button
        type="button"
        class="dish__fav"
        :class="{ 'is-active': favored }"
        :aria-label="favored ? '取消收藏' : '收藏这道菜'"
        @click="toggle(dish.id)"
      >
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="dish__body">
      <div class="dish__top">
        <h3>
          <RouterLink :to="`/menu/${dish.id}`">{{ dish.name }}</RouterLink>
        </h3>
        <span class="dish__price">{{ formatPrice(dish.price) }}</span>
      </div>
      <p class="dish__summary">{{ dish.summary }}</p>
      <div class="dish__meta">
        <RatingStars :rating="dish.rating" :size="12" />
        <span class="dish__category">{{ dish.category }}</span>
      </div>
      <button type="button" class="dish__add" @click="emit('add', dish)">
        加入餐篮 <span aria-hidden="true">＋</span>
      </button>
    </div>
  </article>
</template>

<style scoped>
.dish{display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,.7);border-radius:var(--radius-lg);background:var(--paper);box-shadow:var(--shadow-card);transition:transform .35s cubic-bezier(.22,.61,.36,1),box-shadow .35s ease}
.dish:hover{transform:translateY(-6px);box-shadow:0 30px 50px -30px #462a1499}
.dish__media{position:relative;overflow:hidden;aspect-ratio:4 / 3;background:#e9ddcc}
.dish__image{display:block;width:100%;height:100%}
.dish__image img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.22,.61,.36,1)}
.dish:hover .dish__image img{transform:scale(1.06)}
.dish__badge{position:absolute;top:14px;left:14px;padding:5px 11px;border-radius:999px;color:var(--paper);background:#bf4a30eb;font-size:11px;letter-spacing:.08em;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}
.dish__fav{position:absolute;top:12px;right:12px;display:grid;width:34px;height:34px;place-items:center;border-radius:50%;color:var(--ink-2);background:#fffaf1e6;transition:color .2s ease,transform .2s ease}
.dish__fav:hover{transform:scale(1.08)}
.dish__fav.is-active{color:var(--tomato)}
.dish__fav.is-active svg{fill:currentColor}
.dish__body{display:flex;flex:1;flex-direction:column;padding:20px 22px 22px}
.dish__top{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.dish__top h3{font-size:20px;font-weight:600}
.dish__top h3 a{transition:color .2s ease}
.dish__top h3 a:hover{color:var(--tomato)}
.dish__price{flex:0 0 auto;font-family:var(--font-display);font-size:18px;color:var(--tomato)}
.dish__summary{display:-webkit-box;margin-top:10px;overflow:hidden;color:var(--ink-2);font-size:13px;line-height:1.8;-webkit-box-orient:vertical;-webkit-line-clamp:2}
.dish__meta{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px}
.dish__category{padding:3px 9px;border-radius:999px;color:var(--ink-3);background:#c99a451a;font-size:11px}
.dish__add{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;margin-top:18px;padding:10px 0;border:1px solid var(--line);border-radius:999px;color:var(--ink);font-size:12.5px;letter-spacing:.08em;transition:color .25s ease,background-color .25s ease,border-color .25s ease}
.dish__add span{color:var(--tomato);font-weight:700;transition:color .25s ease}
.dish__add:hover{color:var(--paper);border-color:var(--tomato);background:var(--tomato)}
.dish__add:hover span{color:var(--paper)}
</style>
