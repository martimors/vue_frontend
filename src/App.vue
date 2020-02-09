<template>
  <div id="app">
    <Header />
    <div id="main-content"><router-view /></div>
    <!--<Footer />-->
  </div>
</template>

<script>
// import * as firebaseui from "firebaseui";
import Header from "./components/layout/Header";
//import Footer from "./components/layout/Footer";
export default {
  name: "app",
  components: {
    Header,
    //Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap");
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}
body {
  background-image: url("assets/bgpattern.png");
  height: 100%;
}
#app {
  font-family: "Montserrat", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: auto !important;
  min-height: 100%;
  height: 100%;
  overflow: auto;
  max-width: 500px;
  position: relative;
	margin: 0 auto;
  background-color: white;
  border-style: solid;
  border-width: 0 2px 0 2px;
  border-color: grey;
}

#main-content {
  padding: 0 1vw 0 1vw;
}

#nav {
  padding: 0 0 1vh 0;
  word-spacing: 1.5vw;
  margin: auto;
  text-align: center;
  font-size: 1.2em;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
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
