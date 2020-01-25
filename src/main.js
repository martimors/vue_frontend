import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

// Vue.js initialization
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(firestorePlugin);

const projectId = process.env.PROJECT_ID;
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: projectId + ".firebaseapp.com",
  projectId: projectId,
  databaseURL: "https://" + projectId + ".firebaseio.com",
  storageBucket: projectId + ".appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
