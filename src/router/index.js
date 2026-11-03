import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import DishDetailView from '../views/DishDetailView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
    { path: '/menu', name: 'menu', component: MenuView, meta: { title: '今日菜单' } },
    {
      path: '/menu/:id',
      name: 'dish-detail',
      component: DishDetailView,
      props: true,
      meta: { title: '菜品详情' },
    },
    { path: '/cart', name: 'cart', component: CartView, meta: { title: '我的餐篮' } },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: '关于小馆' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · 食光小馆` : '食光小馆'
})

export default router
