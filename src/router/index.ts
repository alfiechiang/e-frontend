import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/layout/index.vue'),
      children:[
        {
          path: '',
          name: 'hall',
          component: () => import('../views/hall/index.vue')
        },
        {
          path: '/product',
          name: 'product',
          component: () => import('../views/product/index.vue')
        },
      ]

    }
  ]
})

export default router
