<template>
  <div class="login container-fluid">
    <form @submit="requestLogin">
      <div class="form-group row">
        <label for="email" class="col-2 col-form-label">Email</label>
        <div class="col-10">
          <input
            id="email"
            name="email"
            placeholder="E-mail"
            type="text"
            required="required"
            class="form-control"
            maxlength="30"
            v-model="email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-2 col-form-label">Password</label>
        <div class="col-10">
          <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
            class="form-control"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-2 col-10">
          <button name="submit" type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      password: "",
      email: ""
    };
  },
  methods: {
    requestLogin(e) {
      e.preventDefault();
      const newLogin = {
        email: this.email,
        password: this.password
      };
      // Send up to parent
      this.$emit("request-login", newLogin);
    }
  }
};
</script>