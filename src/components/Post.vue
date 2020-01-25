<template>
  <div>
    <h3>{{post.title}}</h3>
    <p>Created {{post.posted_datetime}} by {{post.author}}</p>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"]
};
</script>