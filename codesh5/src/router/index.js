import {createRouter, createWebHashHistory} from 'vue-router'
import Preopen from '../views/preopen/main.vue'
import LoginView from '../views/login/main.vue'
import HomeView from '../views/home/main.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/preopen',
            name: 'preopen',
            component: Preopen
        },
        //首页
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },

        //我的
        {
            path: '/my',
            name: 'my',
            component: () => import('../views/my/main.vue')
        },


        //品级判定列表
        {
            path: '/gradeDetermination',
            name: 'gradeDetermination',
            component: () => import('../views/gradeDetermination/main.vue')

        },

        //判定页面
        {
            path: '/decide',
            name: 'decide',
            component: () => import('../views/gradeDetermination/decide.vue')
        },

        //审核列表
        {
            path: '/auditingList',
            name: 'auditingList',
            component: () => import('../views/auditing/main.vue')
        },

        //审核页面
        {
            path: '/auditingDetails',
            name: 'auditingDetails',
            component: () => import('../views/auditing/details.vue')
        },


        //报表统计页面
        {
            path: '/reportFormStatistics',
            name: 'reportFormStatistics',
            component: () => import('../views/reportFormStatistics/main.vue')
        },

        {
            path: '/login',
            name: 'login',
            component: LoginView
        },


        {
            path: '/',
            component: LoginView
        }
    ]
})

export default router
