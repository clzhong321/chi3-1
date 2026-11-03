<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { dishes, findDishById } from '../data/dishes'
import { useCart } from '../composables/useCart'
import DishInfo from '../components/dish/DishInfo.vue'
import AddToCartPanel from '../components/dish/AddToCartPanel.vue'
import IngredientList from '../components/dish/IngredientList.vue'
import DishGrid from '../components/menu/DishGrid.vue'
import EmptyState from '../components/ui/EmptyState.vue'

// 评价列表单独打包，进入详情页时才异步加载
const ReviewList = defineAsyncComponent(() => import('../components/dish/ReviewList.vue'))

const props = defineProps({
  id: { type: String, required: true },
})

const { add } = useCart()

const dish = computed(() => findDishById(props.id))

// 相关推荐：同品类优先，凑满 3 道
const related = computed(() => {
  if (!dish.value) return []
  const sameCategory = dishes.filter((d) => d.id !== dish.value.id && d.category === dish.value.category)
  const others = dishes.filter((d) => d.id !== dish.value.id && d.category !== dish.value.category)
  return [...sameCategory, ...others].slice(0, 3)
})
</script>

<template>
  <div class="detail">
    <div class="container">
      <template v-if="dish">
        <nav class="breadcrumb" aria-label="面包屑">
          <RouterLink to="/">首页</RouterLink>
          <span>/</span>
          <RouterLink to="/menu">今日菜单</RouterLink>
          <span>/</span>
          <strong>{{ dish.name }}</strong>
        </nav>

        <div class="detail__grid">
          <div v-reveal class="gallery">
            <div class="gallery__frame">
              <img :src="dish.image" :alt="dish.name" />
            </div>
            <span class="gallery__stamp">今日<br />现做</span>
            <span class="gallery__caption">No.{{ dish.id.slice(0, 4).toUpperCase() }} · 食光小馆</span>
          </div>

          <div v-reveal="80" class="detail__side">
            <DishInfo :dish="dish" />
            <AddToCartPanel :key="dish.id" :dish="dish" />
          </div>
        </div>

        <div class="detail__story">
          <div v-reveal class="detail__note">
            <span class="eyebrow">小馆笔记</span>
            <h2>这道菜的来历</h2>
            <p>{{ dish.story }}</p>
            <blockquote>「火候到了，味道就到了。」—— 外婆的笔记本</blockquote>
          </div>
          <IngredientList v-reveal="80" :ingredients="dish.ingredients" />
        </div>

        <section class="detail__reviews">
          <div class="detail__section-head">
            <span class="eyebrow">Reviews</span>
            <h2>食客怎么说</h2>
          </div>
          <Suspense>
            <template #fallback>
              <div class="detail__loading">正在端上食客的评价…</div>
            </template>
            <ReviewList :reviews="dish.reviews" :rating="dish.rating" :review-count="dish.reviewCount" />
          </Suspense>
        </section>

        <section class="detail__related">
          <div class="detail__section-head">
            <span class="eyebrow">You May Also Like</span>
            <h2>也许你也会喜欢</h2>
          </div>
          <DishGrid :dishes="related" @add="add" />
        </section>
      </template>

      <EmptyState
        v-else
        title="这道菜好像下架了"
        description="菜单每季都会换，回菜单页看看今天有什么新鲜的吧。"
      >
        <template #action>
          <RouterLink to="/menu" class="btn btn--primary">回到今日菜单</RouterLink>
        </template>
      </EmptyState>
    </div>
  </div>
</template>

<style scoped>
.detail{padding:28px 0 96px}
.breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;color:var(--ink-3);font-size:12px}
.breadcrumb a{transition:color .2s ease}
.breadcrumb a:hover{color:var(--tomato)}
.breadcrumb strong{color:var(--ink);font-weight:500}
.detail__grid{display:grid;grid-template-columns:1fr .92fr;gap:56px;align-items:start}
.gallery{position:relative}
.gallery__frame{overflow:hidden;aspect-ratio:5 / 4.6;border-radius:26px 26px 26px 90px;background:#e9ddcc;box-shadow:var(--shadow-soft)}
.gallery__frame img{width:100%;height:100%;object-fit:cover}
.gallery__stamp{position:absolute;top:20px;right:20px;display:grid;width:76px;height:76px;place-items:center;border:1px solid rgba(255,250,241,.5);border-radius:50%;color:var(--paper);background:#bf4a30e6;font-family:var(--font-display);font-size:13px;line-height:1.35;text-align:center;transform:rotate(8deg);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}
.gallery__caption{position:absolute;bottom:18px;left:24px;color:#fffaf1d9;font-size:10px;letter-spacing:.16em;text-shadow:0 1px 6px rgba(40,25,15,.5)}
.detail__side{display:flex;flex-direction:column;gap:26px;padding-top:10px}
.detail__story{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;margin-top:64px;padding-top:48px;border-top:1px dashed var(--line)}
.detail__note h2,.detail__section-head h2{margin-top:12px;font-size:clamp(24px,2.6vw,32px)}
.detail__note p{margin-top:18px;color:var(--ink-2);font-size:14.5px;line-height:2.1}
.detail__note blockquote{margin:24px 0 0;padding:14px 0 14px 20px;border-left:2px solid var(--gold);color:var(--ink-3);font-family:var(--font-display);font-size:14px;line-height:1.9}
.detail__reviews{margin-top:64px;padding-top:48px;border-top:1px dashed var(--line)}
.detail__section-head{margin-bottom:28px}
.detail__loading{padding:40px;border:1px dashed var(--line);border-radius:var(--radius-md);color:var(--ink-3);font-size:12.5px;text-align:center}
.detail__related{margin-top:72px}
@media(max-width:900px){.detail__grid,.detail__story{grid-template-columns:1fr;gap:40px}.detail{padding-bottom:64px}}
</style>
