import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import store from "./store";

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

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
export const db = firebase.firestore();
export const auth = firebase.auth();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
export const Timestamp = firebase.firestore;
