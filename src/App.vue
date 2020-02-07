<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
// import * as firebaseui from "firebaseui";
import Header from "./components/layout/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap");

body {
  background-image: url("assets/bgpattern.png");
}
#app {
  font-family: "Montserrat", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  max-width: 500px;
  margin: auto;
  background-color: white;
  border-style: solid;
  border-width: 0 2px 0 2px;
  border-color: grey;
  padding: 0 1vw 0 1vw;
}

#nav {
  padding: 2vh 0 1vh 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img {
  max-width: 90%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
