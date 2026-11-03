<script setup>
import { ref } from 'vue'

defineProps({
  placeholder: { type: String, default: '搜一道菜，比如「红烧肉」' },
})

const model = defineModel({ type: String, default: '' })

const inputRef = ref(null)

// 暴露给父组件：聚焦搜索框
defineExpose({
  focus: () => inputRef.value?.focus(),
})
</script>

<template>
  <label class="search">
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" stroke-linecap="round" />
    </svg>
    <input
      ref="inputRef"
      v-model="model"
      type="search"
      :placeholder="placeholder"
      aria-label="搜索菜品"
    />
    <button
      v-if="model"
      type="button"
      class="search__clear"
      aria-label="清空搜索"
      @click="model = ''"
    >
      ×
    </button>
  </label>
</template>

<style scoped>
.search{display:flex;align-items:center;gap:10px;padding:12px 18px;border:1px solid var(--line);border-radius:999px;color:var(--ink-3);background:var(--paper);transition:border-color .25s ease,box-shadow .25s ease}
.search:focus-within{border-color:var(--tomato);box-shadow:0 0 0 4px #bf4a3014}
.search input{width:100%;min-width:0;border:none;outline:none;background:transparent;color:var(--ink);font-size:13.5px}
.search input::placeholder{color:var(--ink-3)}
.search input::-webkit-search-cancel-button{display:none}
.search__clear{display:grid;width:22px;height:22px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--ink-3);background:#563c2614;font-size:14px;line-height:1}
.search__clear:hover{color:var(--paper);background:var(--tomato)}
</style>
