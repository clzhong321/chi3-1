<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' },
  light: { type: Boolean, default: false },
})
</script>

<template>
  <header class="heading" :class="[`heading--${align}`, { 'heading--light': light }]">
    <div class="heading__body">
      <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
      <h2 class="heading__title">{{ title }}</h2>
      <p v-if="description" class="heading__desc">{{ description }}</p>
      <slot />
    </div>
    <div v-if="$slots.action" class="heading__action">
      <slot name="action" />
    </div>
  </header>
</template>

<style scoped>
.heading{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:44px}
.heading__title{margin-top:14px;font-size:clamp(28px,3.2vw,42px)}
.heading__desc{max-width:520px;margin-top:12px;color:var(--ink-2);font-size:14.5px;line-height:1.9}
.heading--center{flex-direction:column;align-items:center;text-align:center}
.heading--center .heading__desc{margin-right:auto;margin-left:auto}
.heading--center .heading__action{margin-top:4px}
.heading--light .heading__title{color:var(--paper)}
.heading--light .heading__desc{color:#f3e9d899}
.heading__action{flex:0 0 auto}
@media(max-width:640px){.heading{flex-direction:column;align-items:flex-start;gap:18px;margin-bottom:32px}}
</style>
