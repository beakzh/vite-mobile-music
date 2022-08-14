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
			{
				path: 'boke',
				name: 'Boke',
				component: _ => import('@/views/boke/index.vue'),
			},
			{
				path: 'mine',
				name: 'Mine',
				component: _ => import('@/views/mine/index.vue'),
			},
			{
				path: 'follow',
				name: 'Follow',
				component: _ => import('@/views/follow/index.vue'),
			},
			{
				path: 'village',
				name: 'Village',
				component: _ => import('@/views/village/index.vue'),
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
		component: _ => import('@/views/login/EmailLogin.vue'),
	},
	{
		path: '/editSheet',
		name: 'EditSheet',
		component: _ => import('@/views/editSheet/index.vue'),
	},
	{
		path: '/editName',
		name: 'EditName',
		component: _ => import('@/views/editSheet/EditName.vue'),
	},
	{
		path: '/editTags',
		name: 'EditTags',
		component: _ => import('@/views/editSheet/EditTags.vue'),
	},
	{
		path: '/editDesc',
		name: 'EditDesc',
		component: _ => import('@/views/editSheet/EditDesc.vue'),
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
