<template>
  <NewUser v-on:add-user="addUser" />
</template>

<script>
import NewUser from "../components/NewUser";
import { auth } from "@/firebase";

export default {
  name: "Register",
  components: {
    NewUser
  },
  methods: {
    addUser(newUser) {
      auth
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: "test"
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>