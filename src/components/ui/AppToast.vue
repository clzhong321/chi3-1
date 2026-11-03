<script setup>
import { useToast } from '../../composables/useToast'

const { message } = useToast()
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="message" class="toast" role="status" aria-live="polite">
        <span class="toast__icon">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12.5 10 17l9-10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <span>{{ message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast{position:fixed;top:92px;left:50%;z-index:90;display:flex;align-items:center;gap:10px;max-width:calc(100vw - 40px);padding:12px 18px;border:1px solid rgba(255,255,255,.12);border-radius:999px;color:var(--paper);background:#2c2119f0;box-shadow:0 20px 40px -20px #1e140ccc;font-size:13.5px;transform:translate(-50%);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.toast__icon{display:grid;width:22px;height:22px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--paper);background:var(--tomato)}
.toast-enter-active,.toast-leave-active{transition:opacity .28s ease,transform .32s cubic-bezier(.22,.61,.36,1)}
.toast-enter-from,.toast-leave-to{opacity:0;transform:translate(-50%,-14px)}
</style>
