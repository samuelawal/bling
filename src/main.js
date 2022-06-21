import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/index.css";

import "./plugins/bootstrap.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
