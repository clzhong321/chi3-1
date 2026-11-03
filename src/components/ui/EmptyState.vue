<script setup>
defineProps({
  title: { type: String, default: '这里暂时空空的' },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="empty">
    <div class="empty__icon">
      <slot name="icon">
        <svg
          viewBox="0 0 24 24"
          width="34"
          height="34"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
        >
          <path d="M5 9h14l-1.2 10.5H6.2L5 9Z" stroke-linecap="round" />
          <path d="M9 9a3 3 0 0 1 6 0" stroke-linecap="round" />
        </svg>
      </slot>
    </div>
    <h3>{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
    <div v-if="$slots.action" class="empty__action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.empty{display:flex;flex-direction:column;align-items:center;padding:72px 24px;text-align:center}
.empty__icon{display:grid;width:76px;height:76px;margin-bottom:22px;place-items:center;border:1px dashed var(--line);border-radius:50%;color:var(--tomato);background:#bf4a300d}
.empty h3{font-size:20px}
.empty p{max-width:360px;margin-top:10px;color:var(--ink-2);font-size:13.5px;line-height:1.9}
.empty__action{margin-top:24px}
</style>
