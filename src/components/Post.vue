<template>
  <div class="content">
    <h3 class="headline">{{post.title}}</h3>
    <p id="created">Created {{post.posted_datetime.toDate()}} by {{post.author}}</p>
    <div class="posts">{{post.body}}</div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"]
};
</script>
<style scoped>
p#created {
  font-size: 8pt;
}
h3.headline {
  font-family: "Open Sans", sans-serif;
  padding: 2em 0 0 0;
}
.content {
}
</style>