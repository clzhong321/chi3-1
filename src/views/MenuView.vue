<script setup>
import { computed, ref } from 'vue'
import { categories, dishes } from '../data/dishes'
import { useCart } from '../composables/useCart'
import { useFavorites } from '../composables/useFavorites'
import SearchBar from '../components/menu/SearchBar.vue'
import DishFilters from '../components/menu/DishFilters.vue'
import DishGrid from '../components/menu/DishGrid.vue'
import EmptyState from '../components/ui/EmptyState.vue'

const { add } = useCart()
const { isFavorite } = useFavorites()

const keyword = ref('')
const category = ref('全部')
const maxPrice = ref(70)
const sort = ref('default')
const favoritesOnly = ref(false)

// 五步筛选管道：分类 → 价格 → 收藏 → 关键词 → 排序
const results = computed(() => {
  const kw = keyword.value.trim()
  let list = dishes.filter((dish) => {
    const matchCategory = category.value === '全部' || dish.category === category.value
    const matchPrice = dish.price <= maxPrice.value
    const matchFavorite = !favoritesOnly.value || isFavorite(dish.id)
    const matchKeyword =
      !kw ||
      dish.name.includes(kw) ||
      dish.summary.includes(kw) ||
      dish.category.includes(kw) ||
      dish.tags.some((tag) => tag.includes(kw))
    return matchCategory && matchPrice && matchFavorite && matchKeyword
  })
  if (sort.value === 'price') list = [...list].sort((a, b) => a.price - b.price)
  if (sort.value === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
  if (sort.value === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'zh'))
  return list
})

const filtered = computed(
  () =>
    keyword.value !== '' ||
    category.value !== '全部' ||
    maxPrice.value !== 70 ||
    sort.value !== 'default' ||
    favoritesOnly.value,
)

function resetFilters() {
  keyword.value = ''
  category.value = '全部'
  maxPrice.value = 70
  sort.value = 'default'
  favoritesOnly.value = false
}
</script>

<template>
  <div class="menu-page">
    <section class="menu-hero">
      <div class="container menu-hero__inner">
        <div>
          <span v-reveal class="eyebrow">Our Menu · 今日菜单</span>
          <h1 v-reveal="60">今天想吃点什么？</h1>
          <p v-reveal="120">
            六十八道家常菜，按季节上架。你可以按分类慢慢挑，也可以直接搜一道惦记了很久的味道。
          </p>
        </div>
        <div v-reveal="160" class="menu-hero__note">
          <span class="menu-hero__num">68</span>
          <span>道家常味<br />今日供应 <strong>{{ dishes.length }}</strong> 道</span>
        </div>
      </div>
    </section>

    <section class="menu-body">
      <div class="container">
        <div class="toolbar surface">
          <SearchBar v-model="keyword" />
          <DishFilters
            v-model:category="category"
            v-model:price="maxPrice"
            v-model:sort="sort"
            v-model:favoritesOnly="favoritesOnly"
            :categories="categories"
            @reset="resetFilters"
          />
        </div>

        <div class="results-bar">
          <p>
            为你找到 <strong>{{ results.length }}</strong> 道菜
            <span v-if="filtered" class="results-bar__hint">· 已应用筛选</span>
          </p>
          <button v-if="filtered" type="button" class="results-bar__clear" @click="resetFilters">
            收起筛选
          </button>
        </div>

        <DishGrid v-if="results.length" :dishes="results" @add="add" />
        <div v-else class="surface">
          <EmptyState
            title="没有找到这道味道"
            description="换个关键词，或者把筛选条件放宽一点。也许它今天休息，明天就回来了。"
          >
            <template #action>
              <button type="button" class="btn btn--primary" @click="resetFilters">
                重置筛选条件
              </button>
            </template>
          </EmptyState>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.menu-page{overflow:hidden}
.menu-hero{padding:68px 0 44px}
.menu-hero__inner{display:flex;align-items:flex-end;justify-content:space-between;gap:40px}
.menu-hero h1{margin-top:16px;font-size:clamp(38px,5vw,62px);font-weight:500}
.menu-hero p{max-width:520px;margin-top:16px;color:var(--ink-2);font-size:14.5px;line-height:2}
.menu-hero__note{display:flex;align-items:center;gap:14px;padding:14px 22px;border:1px solid var(--line);border-radius:18px;color:var(--ink-2);font-size:12px;line-height:1.8;background:#fffaf199}
.menu-hero__note strong{color:var(--tomato)}
.menu-hero__num{font-family:var(--font-display);font-size:38px;line-height:1;color:var(--tomato)}
.menu-body{padding-bottom:96px}
.toolbar{display:flex;flex-direction:column;gap:18px;padding:24px 28px}
.toolbar .search{max-width:460px}
.results-bar{display:flex;align-items:center;justify-content:space-between;margin:30px 0 22px;color:var(--ink-2);font-size:13px}
.results-bar strong{color:var(--tomato);font-size:15px}
.results-bar__hint{color:var(--ink-3)}
.results-bar__clear{color:var(--ink-3);font-size:12px;text-decoration:underline;text-underline-offset:4px}
.results-bar__clear:hover{color:var(--tomato)}
@media(max-width:820px){.menu-hero__inner{flex-direction:column;align-items:flex-start}.menu-hero__note{display:none}.menu-body{padding-bottom:64px}.toolbar{padding:20px}}
</style>
