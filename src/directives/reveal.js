// v-reveal：元素进入视口时添加 is-visible 触发渐入动画
// 用法：v-reveal 或 v-reveal="120"（120 为延迟毫秒数）
const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el) {
    el.__revealObserver?.disconnect()
  },
}

export default reveal
