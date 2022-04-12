import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AllTasks from "../views/AllTasks.vue";
import ActiveTasksVue from "../views/ActiveTasks.vue";
import CompletedTasks from "../views/CompletedTasks.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: AllTasks,
  },
  {
    path: "/all",
    name: "AllTasks",
    component: AllTasks,
  },
  {
    path: "/active",
    name: "ActiveTasks",
    component: ActiveTasksVue,
  },
  {
    path: "/completed",
    name: "CompletedTasks",
    component: CompletedTasks,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
