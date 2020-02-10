<template>
  <header class="header">
    <div id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link :to="{name: 'login'}">Login</router-link>
        <!--|<router-link to="/register">Register</router-link>-->
        <router-link to="/">
          <img src="../../assets/logo.png" />
        </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
a {
  padding: 0 1vh 0 1vh;
}
</style>