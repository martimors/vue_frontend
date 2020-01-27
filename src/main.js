import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Vue.js initialization
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(firestorePlugin);

const projectId = process.env.VUE_APP_PROJECT_ID;
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: projectId + ".firebaseapp.com",
  projectId: projectId,
  databaseURL: "https://" + projectId + ".firebaseio.com",
  storageBucket: projectId + ".appspot.com",
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

console.log(firebaseConfig);

export const db = firebase.initializeApp(firebaseConfig).firestore();
export const auth = firebase.auth();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
