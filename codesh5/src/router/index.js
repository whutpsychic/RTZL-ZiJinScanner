import { createRouter, createWebHashHistory } from 'vue-router'
import Preopen from '../views/preopen/main.vue'
import LoginView from '../views/login/main.vue'
import HomeView from '../views/home/main.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'preopen',
      component: Preopen
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chooseCarNumber',
      name: 'chooseCarNumber',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/chooseCarNumber/main.vue')
    },
    {
      path: '/chukudanDetails',
      name: 'chukudanDetails',
      component: () => import('../views/chukudanDetails/main.vue')
    },
    {
      path: '/chukudanQuery',
      name: 'chukudanQuery',
      component: () => import('../views/chukudanQuery/main.vue')
    },
    {
      path: '/chukudanResultQuery',
      name: 'chukudanResultQuery',
      component: () => import('../views/chukudanResultQuery/main.vue')
    },

    {
      path: '/jianpeidanDetails',
      name: 'jianpeidanDetails',
      component: () => import('../views/jianpeidanDetails/main.vue')
    },
    {
      path: '/jianpeidanQueryResult',
      name: 'jianpeidanQueryResult',
      component: () => import('../views/jianpeidanQueryResult/main.vue')
    },
    {
      path: '/jianpeidantouQuery',
      name: 'jianpeidantouQuery',
      component: () => import('../views/jianpeidantouQuery/main.vue')
    },
    {
      path: '/jianpeiScannedResult',
      name: 'jianpeiScannedResult',
      component: () => import('../views/jianpeiScannedResult/main.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/manualUnqualifiedBarcodes',
      name: 'manualUnqualifiedBarcodes',
      component: () => import('../views/manualUnqualifiedBarcodes/main.vue')
    },
  ]
})

export default router
