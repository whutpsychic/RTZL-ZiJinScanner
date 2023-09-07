import {createRouter, createWebHashHistory} from 'vue-router'
import Preopen from '../views/preopen/main.vue'
import LoginView from '../views/login/main.vue'


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
            component: () => import('../views/home/main.vue')
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
            // meta: {
            //     keepAlive: true
            // },
            component: () => import('../views/auditing/main.vue')
        },

        // //审核页面
        // {
        //     path: '/auditingDetails',
        //     name: 'auditingDetails',
        //     component: () => import('../views/auditing/details.vue')
        // },


        //报表统计页面
        {
            path: '/reportFormStatistics',
            name: 'reportFormStatistics',
            component: () => import('../views/reportFormStatistics/main.vue')
        },

        //质检记录列表

        {
            path: '/qualityCheckingRecord',
            name: 'qualityCheckingRecord',
            component: () => import('../views/qualityCheckingRecord/main.vue')
        },

        //拣配查询页面
        {
            path: '/pickWithQuery',
            name: 'pickWithQuery',
            component: () => import('../views/pickWith/pickWithQuery.vue')
        },


        //出库单查询结果页面
        {
            path: '/pickWithQueryListData',
            name: 'pickWithQueryListData',
            meta: {
                keepAlive: true //设置页面是否需要使用缓存
            },
            component: () => import('../views/pickWith/pickWithQueryListData.vue')
        },

        //出库单内容
        {
            path: '/pickWithQueryInfoData',
            name: 'pickWithQueryInfoData',
            component: () => import('../views/pickWith/pickWithQueryInfoData.vue')
        },

        //选择车号
        {
            path: '/chooseWagonNumber',
            name: 'chooseWagonNumber',
            component: () => import('../views/pickWith/chooseWagonNumber.vue')
        },


        //拣配页面
        {
            path: '/pickWith',
            name: 'pickWith',
            component: () => import('../views/pickWith/pickWith.vue')
        },



        //拣配记录查询页面
        {
            path: '/pickWithRecordQuery',
            name: 'pickWithRecordQuery',
            component: () => import('../views/pickWithRecordQuery/pickWithRecordQuery.vue')
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
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(savedPosition)
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return {left: 0, top: 0}
    //     }
    // }


})


export default router
