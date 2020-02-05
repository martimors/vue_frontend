<template>
  <div id="newUser">
    <form @submit="addUser" class="form-horizontal">
      <fieldset>
        <!-- Form Name -->
        <legend>Register</legend>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="nickname">Nickname</label>
          <div class="col-md-4">
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="nickname"
              class="form-control input-md"
              required
              v-model="nickname"
            />
          </div>
        </div>
        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="email">E-mail</label>
          <div class="col-md-4">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="E-mail address"
              class="form-control input-md"
              required
              v-model="email"
            />
          </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="password">Password</label>
          <div class="col-md-4">
            <input
              id="password"
              name="password"
              type="password"
              placeholder
              class="form-control input-md"
              required
              v-model="password"
            />
          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="submit"></label>
          <div class="col-md-4">
            <button id="submit" name="submit" type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "newUser",
  data() {
    return {
      email: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    addUser(e) {
      e.preventDefault();
      const newUser = {
        email: this.email,
        password: this.password,
        nickname: this.nickname
      };
      // Send up to parent
      this.$emit("add-user", newUser);
    }
  }
};
</script>