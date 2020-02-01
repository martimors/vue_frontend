<template>
  <div id="addPost">
      <h3>Test</h3>
  </div>
</template>

<script>
// import uuid from "uuid";
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      const newPost = {
        title: this.title,
        body: this.body
      };
      // Send up to parent
      this.$emit("add-post", newPost);
    }
  }
};
</script>

<style scoped>
</style>