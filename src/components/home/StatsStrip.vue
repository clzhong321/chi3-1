<script setup>
import { stats } from '../../data/dishes'
</script>

<template>
  <section class="stats">
    <div class="container stats__grid">
      <div v-for="(stat, index) in stats" :key="stat.label" v-reveal="index * 70" class="stat">
        <div class="stat__value">
          {{ stat.value }}<small>{{ stat.unit }}</small>
        </div>
        <div class="stat__label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fffaf180}
.stats__grid{display:grid;grid-template-columns:repeat(4,1fr);padding:40px 0}
.stat{position:relative;text-align:center}
.stat+.stat:before{position:absolute;top:50%;left:0;width:1px;height:40px;background:var(--line);content:"";transform:translateY(-50%)}
.stat__value{font-family:var(--font-display);font-size:clamp(28px,3vw,38px);color:var(--ink);line-height:1.1}
.stat__value small{margin-left:3px;color:var(--tomato);font-family:var(--font-body);font-size:13px;font-weight:500}
.stat__label{margin-top:8px;color:var(--ink-3);font-size:12px;letter-spacing:.1em}
@media(max-width:620px){.stats__grid{grid-template-columns:repeat(2,1fr);gap:26px 0;padding:30px 0}.stat:nth-child(3):before{display:none}}
</style>
