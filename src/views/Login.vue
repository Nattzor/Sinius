<template>
  <div class="container">
    <div class="login-form">
      <h1 class="login-title">LOGIN</h1>
      <div class="user-name">
        <h1>Email</h1>
        <br />
        <input
          class="input-field"
          type="text"
          placeholder="Type Email here"
          v-model="loginDetails.email"
        />
      </div>
      <div class="password">
        <h1 class="">Password</h1>
        <br />
        <input
          class="input-field"
          type="password"
          placeholder="Type password here"
          v-model="loginDetails.password"
        />
      </div>
      <button class="btn" @click="authLogin">Login</button>
      <fa icon="fa-solid fa-lock" />
      <h2>
        <router-link to="/Signup">Signup</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDetails: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async authLogin() {
      // $FEEDBACK: authUser dispatch is asynchronous, the router navigates before the request is finished
      // causing GET /api/me to be sent too soon without a token.
      await this.$store.dispatch("authUser", this.loginDetails);
      this.$router.push("/UserAccount");
      this.$store.dispatch("userAccount");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 2rem;
}
h1 {
  font-family: "Work Sans", sans-serif;
}
h2 {
  margin-bottom: 2rem;
}
.login-title {
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.login-form {
  margin-top: 3rem;
  width: 588px;
  height: 604px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.login-form input {
  font-size: 24px;
  padding-left: 1rem;
}
.input-field {
  width: 380px;
  height: 58px;
  background: rgba(204, 204, 204, 0.5);
  border: 3px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 100px;
}
.input-field:active,
.input-field:focus,
.input-field:hover {
  border-color: #1e16af;
  outline: none;
}
.btn {
  display: flex;
  width: 324px;
  height: 51px;
  background: #c4c4c4;
  border-radius: 100px;
  margin-top: 30px;
  padding: 16px 20px;
  font-weight: 700;
  box-shadow: 0px 2px 2px #2f2f36;
  cursor: pointer;
  transition: 0.2s;
  font-family: sans-serif;
  font-size: 25px;
  align-items: center;
  justify-content: center;
}
.btn:active,
.btn:focus,
.btn:hover {
  border-color: #1e16af;
  outline: none;
}
.user-icon {
  height: 20px;
}
</style>
