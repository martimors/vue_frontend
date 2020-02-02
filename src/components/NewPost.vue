<template>
  <div id="addPost">
      <form @submit="addPost">
        <div class="form-group row">
          <label for="title" class="col-2 col-form-label">Title</label>
          <div class="col-10">
            <input
              id="title"
              name="title"
              placeholder="Title"
              type="text"
              required="required"
              class="form-control"
              maxlength="30"
              v-model="title"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="body" class="col-2 col-form-label">Body</label>
          <div class="col-10">
            <textarea
              id="body"
              name="body"
              cols="40"
              rows="5"
              required="required"
              class="form-control"
              maxlength="256"
              v-model="body"
            ></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-2 col-10">
            <button name="submit" type="submit" class="btn btn-primary">Post</button>
          </div>
        </div>
      </form>
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
        title: this.title.trim().substring(0,30),
        body: this.body.trim().substring(0,256)
      };
      // Send up to parent
      this.$emit("add-post", newPost);
    },
  }
};
</script>

<style scoped>
</style>