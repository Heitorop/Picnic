// Composables
import { createRouter, createWebHistory } from "vue-router";
import RentHouse from 'views/RentHouse.vue';
import Authorization from '@/views/Authorization.vue';

const routes = [
  {
    path: '/login',
    component: Authorization,
  },
  {
    path: '/rent',
    component: RentHouse,
  },
  {
    path: '/:catchAll(.*)', 
    redirect: '/login',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
