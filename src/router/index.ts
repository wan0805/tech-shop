import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home' },
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      meta: { title: 'Loading Product...' },
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { title: 'Shopping Cart' },
      component: () => import('../views/CartView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to) => {
  const baseTitle = 'Tech Shop'
  const pageTitle = to.meta.title as string

  document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle
})

export default router
