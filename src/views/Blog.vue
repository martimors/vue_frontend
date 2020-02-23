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
import { storage } from "@/firebase";
import { Timestamp } from "@/firebase";
import { mapGetters } from "vuex";
import * as uuid from "uuid/v4";
import { TaskState } from "@/firebase";

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
      // Upload the image (it will get resized)
      let filename = uuid();
      let extension = ".jpg";
      console.log(filename);

      var uploadTask = storage
        .ref()
        .child(filename + extension)
        .put(newPost.imageData);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        function(snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        function(error) {
          // Handle unsuccessful uploads
          console.log(error);
        },
        async function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          let downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          console.log(downloadURL);
          // Post the post with the url
          await db.collection("posts").add({
            title: newPost.title,
            body: newPost.body,
            posted_datetime: Timestamp.FieldValue.serverTimestamp(),
            author: "admin",
            image: filename + extension
          });
        }
      );
    }
  }
};
</script>

<style>
</style>
