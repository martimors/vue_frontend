<template>
  <header class="header">
    <div id="currentuser_container">
      <div id="currentuser" v-if="user.loggedIn">
        Logged in as: {{user.data.displayName}} {{user.data}} {{user.claims}}
        <a @click.prevent="signOut">Sign out</a>
      </div>
    </div>
    <router-link to="/">
      <img src="../../assets/logo.png" />
    </router-link>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="!user.loggedIn" :to="{name: 'login'}">Login</router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { auth } from "@/firebase";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$router.replace({
          name: "posts"
        });
      });
    }
  }
};
</script>

<style scoped>
a {
  padding: 0 1vh 0 1vh;
}
#currentuser {
  font-size: 2vh;
  height: 2vh;
  text-align: center;
}
#currentuser_container {
  height: 2vh;
}
</style>