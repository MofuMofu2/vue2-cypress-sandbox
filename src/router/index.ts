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
    path: "/active",
    name: "ActiveTasks",
    component: () =>
      import(/* webpackChunkName: "active" */ "../views/ActiveTasks.vue"),
  },
  {
    path: "/completed",
    name: "CompletedTasks",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/CompletedTasks.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
