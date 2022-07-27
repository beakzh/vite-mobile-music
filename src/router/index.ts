import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        redirect: '/home',
        component: ()=> import('@/layout/index.vue'),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: ()=> import('@/views/home/index.vue'),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router