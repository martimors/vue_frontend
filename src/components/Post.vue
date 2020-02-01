<template>
  <div>
    <h3>{{post.title}}</h3>
    <p id="created">Created {{post.posted_datetime.toDate()}} by {{post.author}}</p>
    <p>{{post.body}}</p>
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
</style>