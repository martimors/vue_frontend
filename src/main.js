import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { firestorePlugin } from "vuefire";

// Vue.js initialization
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(firestorePlugin);
