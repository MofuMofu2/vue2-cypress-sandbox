import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import { worker } from "./mocks/browser";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  worker.start();
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
