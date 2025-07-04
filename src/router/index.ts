import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/detail/:id',
			name: 'Detail',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/Detail/DetailView.vue'),
		},
		{
			path: '/favorites',
			name: 'Favorites',
			component: () => import('../views/Favorites/FavoritesView.vue'),
		},
	],
});

export default router;
