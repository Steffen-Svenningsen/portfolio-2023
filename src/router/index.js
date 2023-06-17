import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/thank-you',
      name: 'thanks',
      component: () => import('@/views/ThanksView.vue')
    }
  ]
})

export default router
