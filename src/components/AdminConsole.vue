<template>
  <div id="adminconsole">
    <form class="form-horizontal" v-on:submit.prevent="get_other_user">
      <fieldset>
        <!-- Form Name -->
        <legend>Find user by email</legend>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Email</label>
          <div class="col-md-5">
            <input
              id="textinput"
              name="textinput"
              v-model="email"
              type="text"
              placeholder="E-mail address"
              class="form-control input-md"
              required
            />
          </div>
        </div>
      </fieldset>
    </form>
    <AdminToggle
      v-if="userInfo != null"
      v-bind:userInfo="userInfo"
      v-on:toggle-admin="toggleAdmin"
    />
  </div>
</template>

<script>
//import { auth } from "@/firebase";
import { functions } from "@/firebase";
import { auth } from "@/firebase";
import AdminToggle from "./AdminToggle";
export default {
  name: "AdminConsole",
  components: { AdminToggle },
  data() {
    return {
      email: "",
      userInfo: null
    };
  },
  methods: {
    async get_other_user(e) {
      e.preventDefault();
      // Get current user ID
      var userId = auth.currentUser.uid;
      // Call function to retrieve the user
      var getUser = functions.httpsCallable("getUser");
      try {
        let result = await getUser({ uid: userId, email: this.email });
        this.userInfo = result.data;
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    },
    async toggleAdmin() {
      console.log("Toggle admin");
      // Get current user ID
      var userId = auth.currentUser.uid;
      // Call function to retrieve the user
      var toggleAdminUser = functions.httpsCallable("toggleAdmin");
      try {
        let result = await toggleAdminUser({ uid: userId, email: this.email });
        this.userInfo = result.data;
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>