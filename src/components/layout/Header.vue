<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!--<template v-if="user.loggedIn">-->
        <router-link :to="{name: 'login'}">Login</router-link>
        <div v-if="user.loggedIn">{{user.data.displayName}}</div>
      <!--</template>-->
      <!--<template v-else>
        <a class="nav-link" @click.prevent="signOut">Sign out</a>
      </template>-->
      <router-link to="/">
        <img src="../../assets/logo.png" />
      </router-link>
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
      auth
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
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
</style>