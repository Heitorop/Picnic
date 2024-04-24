// Composables
import { createRouter, createWebHistory } from "vue-router";
import MapView from "views/MapView.vue";
import AuthView from "views/AuthView.vue";
import BookHouse from "views/BookHouse.vue";
import { supabase } from "@/plugins/supabase";

let localUser;

const routes = [
  {
    path: "/",
    name: "map",
    component: MapView,
    children: [
      {
        path: "/rent/:id",
        name: "rent",
        component: BookHouse,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/authentication",
    name: "authentication",
    component: AuthView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/authentication",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

async function getUser(next: (arg?: string) => void) {
  localUser = await supabase.auth.getSession();
  if (localUser.data.session === null) {
    next("/authentication");
  } else {
    next();
  }
}

// auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
});

export default router;
