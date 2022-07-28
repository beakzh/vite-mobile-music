import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Layout',
		redirect: '/home',
		component: _ => import('@/layout/index.vue'),
		children: [
			{
				path: 'home',
				name: 'Home',
				component: _ => import('@/views/home/index.vue'),
			},
		],
	},
	{
		path: '/login',
		name: 'Login',
		component: _ => import('@/views/login/Login.vue'),
	},
	{
		path: '/phoneLogin',
		name: 'PhoneLogin',
		component: _ => import('@/views/login/PhoneLogin.vue'),
	},
	{
		path: '/inputCode',
		name: 'InputCode',
		component: _ => import('@/views/login/InputCode.vue'),
	},
    {
        path: '/emailLogin',
        name: 'EmailLogin',
        component: _ => import('@/views/login/EmailLogin.vue')
    }
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
