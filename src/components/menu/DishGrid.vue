<script setup>
import DishCard from './DishCard.vue'

defineProps({
  dishes: { type: Array, default: () => [] },
})

const emit = defineEmits(['add'])
</script>

<template>
  <div class="dish-grid">
    <DishCard
      v-for="(dish, index) in dishes"
      :key="dish.id"
      v-reveal="(index % 3) * 90"
      :dish="dish"
      @add="emit('add', $event)"
    />
  </div>
</template>

<style scoped>
.dish-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
@media(max-width:980px){.dish-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){.dish-grid{grid-template-columns:1fr;gap:22px}}
</style>
