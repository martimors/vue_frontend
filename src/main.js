import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFlashMessage from "vue-flash-message";
import { firestorePlugin } from "vuefire";

// Vue.js initialization
Vue.use(firestorePlugin);
Vue.use(VueFlashMessage);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
