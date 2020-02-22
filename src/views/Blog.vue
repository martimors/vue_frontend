<template>
  <div id="posts">
    <div v-if="user.loggedIn">
      <button
        v-if="user.claims.isAdmin"
        v-show="!formVisible"
        v-on:click="showForm"
        class="btn btn-primary btn-sm btn-block"
      >Add post</button>
    </div>
    <NewPost v-show="formVisible" v-on:add-post="addPost" />
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";
import { db } from "@/firebase";
import { Timestamp } from "@/firebase";
import { mapGetters } from "vuex";

export default {
  name: "Blog",
  components: {
    Posts,
    NewPost
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      posts: [],
      formVisible: false
    };
  },
  firestore() {
    return {
      posts: db.collection("posts").orderBy("posted_datetime", "desc")
    };
  },
  methods: {
    showForm() {
      this.formVisible = !this.formVisible;
    },
    async addPost(newPost) {
      await db.collection("posts").add({
        title: newPost.title,
        body: newPost.body,
        posted_datetime: Timestamp.FieldValue.serverTimestamp(),
        author: "admin"
      });
    }
  }
};
</script>

<style>
</style>
