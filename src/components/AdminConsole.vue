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
  </div>
</template>

<script>
//import { auth } from "@/firebase";
import { functions } from "@/firebase";
export default {
  name: "AdminConsole",
  data() {
    return {
      email: "",
      result: ""
    };
  },
  methods: {
    get_other_user(e) {
      e.preventDefault();
      var getUser = functions.httpsCallable("getUser");
      getUser({ email: this.email })
        .then(result => {
          // Read result of the Cloud Function.
          this.result = result.data.message;
          console.log(result.data.message);
          // ...
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>