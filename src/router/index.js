import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/brand',
            name: 'brand',
            component: () => import('../views/BrandView.vue')
        },
        {
            path: '/stores',
            name: 'stores',
            component: () => import('../views/StoresView.vue')
        },
        {
            path: '/enterprise',
            name: 'enterprise',
            component: () => import('../views/EnterpriseView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
