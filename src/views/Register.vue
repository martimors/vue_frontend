<template>
  <div>
    <NewUser v-on:add-user="addUser" />
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <div v-if="nickname" class="alert alert-success">Thank you for registering, {{nickname}}!</div>
  </div>
</template>

<script>
import NewUser from "../components/NewUser";
import { auth } from "@/firebase";

export default {
  name: "Register",
  components: {
    NewUser
  },
  data() {
    return { error: null, nickname: null };
  },
  methods: {
    //    addUser(newUser) {
    //      auth
    //        .createUserWithEmailAndPassword(newUser.email, newUser.password)
    //        .then(data => {
    //          data.user
    //            .updateProfile({
    //              displayName: newUser.username
    //            })
    //            .then(() => {});
    //        })
    //        .catch(err => {
    //          this.error = err.message;
    //        });
    //    },
    async addUser(newUser) {
      try {
        this.error = null;
        let data = await auth.createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        );
        await data.user.updateProfile({ displayName: newUser.nickname });
        await auth.signOut(); //sign out after registering in order to add extra claims
        this.nickname = await newUser.nickname;
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    }
  }
};
</script>