import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router