import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/404',
      component: import('../views/NotFoundView.vue')
    },
    {
      // path: "*",
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: import('../views/NotFoundView.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
});

export default router;
