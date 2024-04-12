// Composables
import { createRouter, createWebHistory } from "vue-router";
import RentHouse from 'views/RentHouse.vue';
import App from "@/App.vue";

const routes = [
  {
    path: '/',
    component: RentHouse,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
