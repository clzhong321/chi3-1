<script setup>
import { aboutImages, milestones, values } from '../data/dishes'
import SectionHeading from '../components/ui/SectionHeading.vue'

// 主厨团队（本页专用数据）
const team = [
  { name: '陈师傅', role: '主厨 · 炒锅二十年', note: '负责所有热菜，红烧肉的火候只有他说了算。' },
  { name: '周姐', role: '面点 · 手擀面与饺子', note: '每天上午十点开始擀面，面板上永远有一层薄薄的面粉。' },
  { name: '小满', role: '前厅 · 记得每个人的口味', note: '谁不吃香菜、谁喜欢多放辣，她都记在一个小本子上。' },
]
</script>

<template>
  <div class="about">
    <section class="about-hero">
      <div class="container about-hero__grid">
        <div class="about-hero__content">
          <span v-reveal class="eyebrow">About Us · 关于小馆</span>
          <h1 v-reveal="60">
            我们不开<br />网红餐厅，<br />只开一家<span class="about-hero__accent">小馆</span>。
          </h1>
          <p v-reveal="140">
            食光小馆藏在城南老街的梧桐树后面。没有霓虹灯，没有排队号，
            只有十二张桌子、一口用了很多年的铁锅，和一页页被油渍浸过的手写菜谱。
          </p>
        </div>
        <div v-reveal="100" class="about-hero__visual">
          <img :src="aboutImages.interior" alt="食光小馆的店内" />
          <div class="about-hero__badge">
            <span>12 年</span>
            <small>只做家常菜</small>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-manifesto">
      <div class="container about-manifesto__inner">
        <span v-reveal class="about-manifesto__mark">“</span>
        <p v-reveal="60">
          好好吃饭，是一件很普通、也很重要的事。<br />
          我们想做的，就是让这顿饭，值得你放下手机。
        </p>
        <span v-reveal="120" class="about-manifesto__sign">—— 食光小馆 · 全体</span>
      </div>
    </section>

    <section class="section about-values">
      <div class="container">
        <SectionHeading
          eyebrow="What We Believe"
          title="三件小事，坚持了十二年"
          description="没有什么宏大的理念，只是把每天都要做的事，认认真真做好。"
        />
        <div class="value-grid">
          <article
            v-for="(value, index) in values"
            :key="value.title"
            v-reveal="index * 80"
            class="value-card surface"
          >
            <span class="value-card__index">0{{ index + 1 }}</span>
            <span class="value-card__icon">{{ value.icon }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section about-timeline">
      <div class="container about-timeline__grid">
        <div class="about-timeline__intro">
          <span v-reveal class="eyebrow">Our Timeline</span>
          <h2 v-reveal="60">十二年，<br />慢慢长成现在的样子。</h2>
          <p v-reveal="120">有些年份值得记下来，更多普通的日子，藏在每一顿饭里。</p>
        </div>
        <ol class="timeline">
          <li
            v-for="(item, index) in milestones"
            :key="item.year"
            v-reveal="index * 70"
            class="timeline__item"
          >
            <span class="timeline__year">{{ item.year }}</span>
            <div class="timeline__body">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section about-team">
      <div class="container about-team__grid">
        <div v-reveal class="about-team__image">
          <img :src="aboutImages.chef" alt="后厨里正在装盘的师傅" loading="lazy" />
          <span class="about-team__caption">后厨 · 每天 09:30 开始备菜</span>
        </div>
        <div class="about-team__content">
          <span v-reveal class="eyebrow">The People</span>
          <h2 v-reveal="60">厨房里的人</h2>
          <p v-reveal="110" class="about-team__intro">
            一家小馆的味道，其实是几个人的习惯和坚持。他们不太会说漂亮话，但手上的功夫都藏不住。
          </p>
          <div class="team">
            <article
              v-for="(member, index) in team"
              :key="member.name"
              v-reveal="150 + index * 60"
              class="team__item"
            >
              <span class="team__avatar">{{ member.name.charAt(0) }}</span>
              <div>
                <h3>{{ member.name }}<small>{{ member.role }}</small></h3>
                <p>{{ member.note }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="container about-cta__inner">
        <h2 v-reveal>故事听完了，<br />该吃饭了。</h2>
        <RouterLink v-reveal="60" to="/menu" class="btn btn--primary">看看今日菜单 →</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about{padding-top:56px}
.about-hero__grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:64px}
.about-hero h1{margin-top:18px;font-size:clamp(38px,4.8vw,62px);font-weight:500;line-height:1.18}
.about-hero__accent{position:relative;color:var(--tomato)}
.about-hero__accent:after{position:absolute;right:0;bottom:4px;left:0;height:8px;border-radius:4px;background:#c99a4540;content:"";z-index:-1}
.about-hero__content p{max-width:470px;margin-top:22px;color:var(--ink-2);font-size:14.5px;line-height:2.05}
.about-hero__visual{position:relative}
.about-hero__visual img{width:100%;aspect-ratio:4 / 3.2;object-fit:cover;border-radius:24px 24px 90px;box-shadow:var(--shadow-soft)}
.about-hero__badge{position:absolute;bottom:24px;left:-20px;display:flex;flex-direction:column;gap:2px;padding:16px 22px;border-radius:14px;background:var(--paper);box-shadow:var(--shadow-card)}
.about-hero__badge span{color:var(--tomato);font-family:var(--font-display);font-size:26px;line-height:1}
.about-hero__badge small{color:var(--ink-3);font-size:10px;letter-spacing:.08em}
.about-manifesto{padding:80px 0}
.about-manifesto__inner{max-width:820px;margin:0 auto;text-align:center}
.about-manifesto__mark{display:block;color:var(--gold);font-family:var(--font-display);font-size:60px;line-height:.7}
.about-manifesto p{margin-top:14px;font-family:var(--font-display);font-size:clamp(22px,2.8vw,32px);line-height:1.85}
.about-manifesto__sign{display:block;margin-top:22px;color:var(--ink-3);font-size:12px;letter-spacing:.12em}
.value-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.value-card{position:relative;padding:40px 30px 34px;overflow:hidden}
.value-card__index{position:absolute;top:18px;right:24px;color:var(--ink-3);font-family:var(--font-display);font-size:13px}
.value-card__icon{display:grid;width:46px;height:46px;place-items:center;border:1px solid var(--line);border-radius:50%;color:var(--tomato);font-family:var(--font-display);font-size:19px}
.value-card h3{margin-top:20px;font-size:20px}
.value-card p{margin-top:10px;color:var(--ink-2);font-size:13px;line-height:1.9}
.about-timeline{background:#fffaf18c;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.about-timeline__grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:72px}
.about-timeline__intro{position:sticky;top:120px;align-self:start}
.about-timeline__intro h2{margin-top:16px;font-size:clamp(28px,3vw,40px);line-height:1.35}
.about-timeline__intro p{max-width:320px;margin-top:16px;color:var(--ink-2);font-size:13px;line-height:1.9}
.timeline{display:flex;flex-direction:column;gap:34px}
.timeline__item{display:grid;grid-template-columns:78px 1fr;gap:24px;padding-bottom:30px;border-bottom:1px dashed var(--line)}
.timeline__item:last-child{padding-bottom:0;border-bottom:none}
.timeline__year{color:var(--tomato);font-family:var(--font-display);font-size:22px}
.timeline__body h3{font-size:18px}
.timeline__body p{margin-top:7px;color:var(--ink-2);font-size:12.5px;line-height:1.85}
.about-team__grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:center}
.about-team__image{position:relative}
.about-team__image img{width:100%;aspect-ratio:4 / 4.8;object-fit:cover;border-radius:26px 90px 26px 26px;box-shadow:var(--shadow-soft)}
.about-team__caption{display:block;margin-top:14px;color:var(--ink-3);font-size:10px;letter-spacing:.14em}
.about-team__content h2{margin-top:14px;font-size:clamp(26px,3vw,38px)}
.about-team__intro{max-width:460px;margin-top:14px;color:var(--ink-2);font-size:13.5px;line-height:1.9}
.team{display:flex;flex-direction:column;gap:20px;margin-top:30px}
.team__item{display:flex;gap:16px;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fffaf199}
.team__avatar{display:grid;width:44px;height:44px;flex:0 0 auto;place-items:center;border-radius:50%;color:var(--tomato);background:#bf4a3017;font-family:var(--font-display);font-size:18px}
.team__item h3{display:flex;align-items:baseline;gap:10px;font-size:15px;font-family:var(--font-body);font-weight:600}
.team__item h3 small{color:var(--ink-3);font-size:10.5px;font-weight:400;letter-spacing:.06em}
.team__item p{margin-top:5px;color:var(--ink-2);font-size:12px;line-height:1.7}
.about-cta{padding:88px 0 96px}
.about-cta__inner{display:flex;align-items:center;justify-content:space-between;gap:32px;padding:48px 56px;border:1px solid var(--line);border-radius:var(--radius-lg);background:radial-gradient(circle at 80% 20%,rgba(201,154,69,.16),transparent 45%),var(--paper)}
.about-cta h2{font-size:clamp(26px,3vw,36px);line-height:1.4}
@media(max-width:900px){.about-hero__grid,.about-timeline__grid,.about-team__grid{grid-template-columns:1fr;gap:44px}.about-timeline__intro{position:static}.value-grid{grid-template-columns:1fr}.about-cta__inner{flex-direction:column;align-items:flex-start;padding:36px 28px}.about-hero__badge{left:16px}.about{padding-top:40px}}
</style>
