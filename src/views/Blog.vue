<template>
  <div id="posts">
    <h1>Blog</h1>
    <Posts v-bind:posts="posts"/>
  </div>
</template>

<script>
import Posts from "../components/Posts";
import { db } from "../main";

export default {
  name: "Blog",
  components: {
    Posts
  },
  data() {
    return {
      posts: []
    };
  },
  firestore() {
    return {
      posts: db.collection("posts").orderBy("posted_datetime")
    };
  }
};
</script>

<style>
</style>
