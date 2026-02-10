import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/native.vue'),
    },
    {
      path: '/out',
      name: 'out',
      component: () => import('@/views/outtive.vue'),
    },
  ],
})

export default router
