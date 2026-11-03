<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { testimonials } from '../../data/dishes'
import SectionHeading from '../ui/SectionHeading.vue'

const index = ref(0)
const current = computed(() => testimonials[index.value])

let timer = null

function next() {
  index.value = (index.value + 1) % testimonials.length
}

function prev() {
  index.value = (index.value - 1 + testimonials.length) % testimonials.length
}

function go(i) {
  index.value = i
}

function start() {
  stop()
  timer = setInterval(next, 5000)
}

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <section class="voices">
    <div class="container">
      <SectionHeading
        eyebrow="食客说"
        title="他们坐下来，吃了一口，然后说了这些"
        light
        align="center"
      />
      <div class="voices__stage" @mouseenter="stop" @mouseleave="start">
        <span class="voices__mark" aria-hidden="true">“</span>
        <Transition name="quote" mode="out-in">
          <blockquote :key="index" class="quote">
            <p class="quote__text">{{ current.quote }}</p>
            <footer class="quote__footer">
              <span class="quote__avatar">{{ current.name.charAt(0) }}</span>
              <span>
                <strong>{{ current.name }}</strong>
                <small>{{ current.meta }}</small>
              </span>
            </footer>
          </blockquote>
        </Transition>
        <div class="voices__controls">
          <button type="button" class="voices__arrow" aria-label="上一条" @click="prev">←</button>
          <div class="voices__dots">
            <button
              v-for="(item, i) in testimonials"
              :key="item.name"
              type="button"
              class="voices__dot"
              :class="{ 'is-active': i === index }"
              :aria-label="`第 ${i + 1} 条评价`"
              @click="go(i)"
            />
          </div>
          <button type="button" class="voices__arrow" aria-label="下一条" @click="next">→</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.voices{position:relative;overflow:hidden;padding:88px 0 92px;color:#f3e9d8;background:#2c2119}
.voices:before{position:absolute;top:-120px;right:-80px;width:320px;height:320px;border:1px solid rgba(243,233,216,.1);border-radius:50%;content:""}
.voices__stage{position:relative;max-width:760px;margin:0 auto;padding:10px 0 0;text-align:center}
.voices__mark{display:block;margin-bottom:-10px;color:var(--gold);font-family:var(--font-display);font-size:72px;line-height:1;opacity:.7}
.quote{min-height:190px;margin:0}
.quote__text{font-family:var(--font-display);font-size:clamp(18px,2.2vw,24px);line-height:1.9;letter-spacing:.02em}
.quote__footer{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:28px}
.quote__avatar{display:grid;width:40px;height:40px;place-items:center;border:1px solid rgba(243,233,216,.25);border-radius:50%;color:var(--gold);font-family:var(--font-display)}
.quote__footer span:last-child{display:flex;flex-direction:column;text-align:left}
.quote__footer strong{font-size:13.5px;font-weight:600}
.quote__footer small{color:#f3e9d873;font-size:11px;letter-spacing:.08em}
.voices__controls{display:flex;align-items:center;justify-content:center;gap:22px;margin-top:18px}
.voices__arrow{display:grid;width:42px;height:42px;place-items:center;border:1px solid rgba(243,233,216,.22);border-radius:50%;color:#f3e9d8cc;transition:border-color .2s ease,color .2s ease,background-color .2s ease}
.voices__arrow:hover{border-color:var(--gold);color:var(--paper);background:#c99a4529}
.voices__dots{display:flex;gap:8px}
.voices__dot{width:7px;height:7px;border-radius:50%;background:#f3e9d84d;transition:width .25s ease,background-color .25s ease}
.voices__dot.is-active{width:22px;border-radius:999px;background:var(--gold)}
.quote-enter-active,.quote-leave-active{transition:opacity .35s ease,transform .35s ease}
.quote-enter-from{opacity:0;transform:translateY(12px)}
.quote-leave-to{opacity:0;transform:translateY(-12px)}
</style>
