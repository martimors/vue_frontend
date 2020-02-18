<template>
  <div id="admin-toggle">
    <h3>Edit user "{{userInfo.displayName}}"</h3>
    <p>Email: {{userInfo.email}}</p>
    <p>
      Is admin: {{userInfo.isAdmin}}
      <a @click.prevent="$emit('toggle-admin')">(toggle)</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "admin-toggle",
  props: ["userInfo"]
};
</script>

<style scoped>
#admin-toggle {
  border-radius: 15px;
  border: 2px grey;
  border-style: solid;
  background: mediumaquamarine;
  padding: 20px;
}
</style>