<template>
  <div class="login-view">
    <div v-if="!user.loggedIn">
      <LoginForm v-on:request-login="loginUser" />Don't have a user?
      <router-link :to="{name: 'Register'}">Register</router-link>!
    </div>
    <div v-else>Currently logged in as: {{user.data.displayName}} ({{user.data.displayName}}) {{user.data.isAdmin}}</div>
    <flash-message />
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm";
import { mapGetters } from "vuex";
import { auth } from "@/firebase";
export default {
  name: "login",
  components: { LoginForm },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    async loginUser(loginRequest) {
      // Get the isAdmin claim if possible

      // Log the user in
      try {
        await auth.signInWithEmailAndPassword(
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