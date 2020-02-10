<template>
  <div class="login-view">
    <LoginForm v-on:request-login="loginUser" />Don't have a user?
    <router-link :to="{name: 'Register'}">Register</router-link>!
    <flash-message />
  </div>
</template>
<script>
import firebase from "firebase";
import LoginForm from "@/components/LoginForm";
export default {
  name: "login",
  components: { LoginForm },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const tokenResult = await firebase
          .auth()
          .currentUser.getIdTokenResult();
        console.log(tokenResult.claims);
      } else {
        console.log("!");
      }
    });
  },
  methods: {
    async loginUser(loginRequest) {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(
            loginRequest.email,
            loginRequest.password
          );
        console.log("signed in");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.flash(error.message, "error", { timeout: 10000 });
      }
    }
  }
};
</script>