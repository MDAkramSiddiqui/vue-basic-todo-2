import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { state, getters, mutations, actions } from "./store";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false;
// import "uikit/dist/css/uikit.min.css";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
