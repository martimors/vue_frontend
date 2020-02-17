<template>
  <div class="admin">
    <div v-if="user.loggedIn">
      <AdminConsole v-if="isAdmin" />
    </div>
  </div>
</template>

<script>
import AdminConsole from "@/components/AdminConsole";
import { mapGetters } from "vuex";
export default {
  name: "Admin",
  components: {
    AdminConsole
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    }),
    isAdmin: function checkAdmin() {
      return this.user;
    }
  }
};
</script>

<style scoped>
</style>