<script setup>
const props = defineProps({
  min: { type: Number, default: 1 },
  max: { type: Number, default: 20 },
  size: { type: String, default: 'md' },
})

const model = defineModel({ type: Number, default: 1 })

function decrease() {
  model.value = Math.max(props.min, model.value - 1)
}

function increase() {
  model.value = Math.min(props.max, model.value + 1)
}
</script>

<template>
  <div class="stepper" :class="`stepper--${size}`">
    <button
      type="button"
      class="stepper__btn"
      :disabled="model <= min"
      aria-label="减少数量"
      @click="decrease"
    >
      −
    </button>
    <span class="stepper__value">{{ model }}</span>
    <button
      type="button"
      class="stepper__btn"
      :disabled="model >= max"
      aria-label="增加数量"
      @click="increase"
    >
      +
    </button>
  </div>
</template>

<style scoped>
.stepper{display:inline-flex;align-items:center;border:1px solid var(--line);border-radius:999px;background:var(--paper);overflow:hidden}
.stepper__btn{display:grid;width:34px;height:34px;place-items:center;color:var(--ink-2);font-size:16px;transition:background-color .2s ease,color .2s ease}
.stepper__btn:hover:not(:disabled){color:var(--paper);background:var(--tomato)}
.stepper__btn:disabled{color:#cfbfae;cursor:not-allowed}
.stepper__value{min-width:32px;text-align:center;font-size:13.5px;font-weight:600}
.stepper--sm .stepper__btn{width:28px;height:28px;font-size:14px}
.stepper--sm .stepper__value{min-width:26px;font-size:12.5px}
</style>
