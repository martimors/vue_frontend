
<template>
  <div id="posts">
    <Posts />
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
      locations: []
    };
  },
  firestore() {
    return {
      locations: db.collection("posts").orderBy("posted_datetime")
    };
  }
};
</script>

<style>
</style>
