<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  ingredients: { type: Array, default: () => [] },
})

// 已勾选的配料名
const checked = ref([])

const percent = computed(() =>
  props.ingredients.length ? Math.round((checked.value.length / props.ingredients.length) * 100) : 0,
)
const allChecked = computed(() => checked.value.length === props.ingredients.length)

function toggleAll() {
  checked.value = allChecked.value ? [] : props.ingredients.map((item) => item.name)
}
</script>

<template>
  <div class="ingredients">
    <div class="ingredients__head">
      <h3>这一份用到</h3>
      <button type="button" class="ingredients__all" @click="toggleAll">
        {{ allChecked ? '全部取消' : '一键备齐' }}
      </button>
    </div>

    <div class="ingredients__progress">
      <span class="ingredients__bar">
        <span :style="{ width: `${percent}%` }" />
      </span>
      <span class="ingredients__count">已备齐 {{ checked.length }} / {{ ingredients.length }}</span>
    </div>

    <ul class="ingredients__list">
      <li v-for="item in ingredients" :key="item.name">
        <label class="ingredient" :class="{ 'is-checked': checked.includes(item.name) }">
          <input v-model="checked" type="checkbox" :value="item.name" />
          <span class="ingredient__box">
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
            >
              <path d="M5 12.5 10 17l9-10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="ingredient__name">{{ item.name }}</span>
          <span class="ingredient__amount">{{ item.amount }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.ingredients{padding:26px 26px 22px;border:1px solid var(--line);border-radius:var(--radius-md);background:#fffaf1b3}
.ingredients__head{display:flex;align-items:center;justify-content:space-between}
.ingredients__head h3{font-size:18px}
.ingredients__all{color:var(--tomato);font-size:11.5px;text-decoration:underline;text-underline-offset:4px}
.ingredients__progress{display:flex;align-items:center;gap:12px;margin:16px 0 18px}
.ingredients__bar{position:relative;flex:1;height:4px;overflow:hidden;border-radius:999px;background:#563c261a}
.ingredients__bar span{display:block;height:100%;border-radius:inherit;background:var(--gold);transition:width .35s ease}
.ingredients__count{color:var(--ink-3);font-size:10.5px;white-space:nowrap}
.ingredients__list{display:flex;flex-direction:column}
.ingredient{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px dashed rgba(86,60,38,.1);cursor:pointer}
.ingredients__list li:last-child .ingredient{border-bottom:none}
.ingredient input{display:none}
.ingredient__box{display:grid;width:18px;height:18px;flex:0 0 auto;place-items:center;border:1px solid var(--line);border-radius:50%;color:transparent;transition:color .2s ease,background-color .2s ease,border-color .2s ease}
.ingredient.is-checked .ingredient__box{color:var(--paper);border-color:var(--gold);background:var(--gold)}
.ingredient__name{font-size:13px;transition:color .2s ease}
.ingredient.is-checked .ingredient__name{color:var(--ink-3);text-decoration:line-through}
.ingredient__amount{margin-left:auto;color:var(--ink-3);font-size:11.5px}
</style>
