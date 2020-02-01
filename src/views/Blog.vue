<template>
  <div id="posts">
    <h1>Blog</h1>
    <NewPost />
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";
import { db } from "../main";

export default {
  name: "Blog",
  components: {
    Posts,
    NewPost
  },
  data() {
    return {
      posts: []
    };
  },
  firestore() {
    return {
      posts: db.collection("posts").orderBy("posted_datetime", "desc")
    };
  },
  created(){
    console.log("I was created!")
    //TODO: Maybe I have to load in a data snapshot here
  }
};
</script>

<style>
</style>
