import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AllTasks from "../views/AllTasks.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/all",
    name: "AllTasks",
    component: AllTasks,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/Books.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
