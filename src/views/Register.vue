<template>
  <div>
    <NewUser v-on:add-user="addUser" v-show="showForm" />
    <flash-message class="someRandomClass"></flash-message>
  </div>
</template>

<script>
import NewUser from "../components/NewUser";
import { auth } from "@/firebase";
require("vue-flash-message/dist/vue-flash-message.min.css");
export default {
  name: "Register",
  components: {
    NewUser
  },
  data() {
    return { error: null, showForm: true };
  },
  methods: {
    async addUser(newUser) {
      try {
        this.error = null;
        let data = await auth.createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        );
        await data.user.updateProfile({ displayName: newUser.nickname });
        await auth.signOut(); //sign out after registering in order to add extra claims
        this.flash(`User ${newUser.nickname} signed up.`, "success");
        this.showForm = false;
      } catch (error) {
        this.error = error.message;
        console.log(error);
        this.flash(error.message, "error");
      }
    }
  }
};
</script>