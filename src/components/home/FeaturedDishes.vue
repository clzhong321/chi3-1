<script setup>
import { computed } from 'vue'
import { dishes } from '../../data/dishes'
import { useCart } from '../../composables/useCart'
import SectionHeading from '../ui/SectionHeading.vue'
import DishGrid from '../menu/DishGrid.vue'

const { add } = useCart()
const featured = computed(() => dishes.filter((dish) => dish.featured))
</script>

<template>
  <section class="section featured">
    <div class="container">
      <SectionHeading
        eyebrow="Today's Pick"
        title="今天，先吃这几道"
        description="主厨每天开灶前都会挑几道最当季、状态最好的菜。它们不一定最贵，但一定是今天最值得吃的。"
      >
        <template #action>
          <RouterLink to="/menu" class="btn btn--ghost">查看完整菜单 →</RouterLink>
        </template>
      </SectionHeading>
      <DishGrid :dishes="featured" @add="add" />
    </div>
  </section>
</template>

<style scoped>
.featured{padding-top:88px}
</style>
