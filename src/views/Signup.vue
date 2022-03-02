<template>
  <div>
    <h1>Singup</h1>
    <p>Please fill in this form to create an account.</p>
    <form class="container" @submit.prevent="signUpUser">
      <label for="Fname">Name </label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        v-model="userDetails.name"
      />

      <label for="email">Email</label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        v-model="userDetails.email"
      />

      <label for="street">Street Address</label>
      <input
        type="text"
        placeholder="Street Address"
        name="street"
        v-model="userDetails.address.street"
      />

      <label for="city">City</label>
      <input
        type="text"
        placeholder="City"
        name="city"
        v-model="userDetails.address.city"
      />

      <label for="zip">Zip</label>
      <input
        type="text"
        placeholder="Zip"
        name="zip"
        v-model="userDetails.address.zip"
      />

      <label for="password"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        v-model="userDetails.password"
      />

      <!-- <label for="pswRepeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="pswRepeat" v-model="userDetails.pswRepeat" /> -->

      <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style="margin-bottom: 15px"
        />
        Remember me
      </label>

      <p>
        By creating an account you agree to our
        <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
      </p>

      <div class="clearfix">
        <button type="button" class="btn">Cancel</button>
        <button type="submit" class="btn">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetails: {
        name: "",
        email: "",
        password: "",
        address: {
          street: "",
          city: "",
          zip: "",
        },
      },
      errorValidations: {
        name: false,
        email: false,
        street: false,
        zip: false,
        city: false,
        password: false,
      },
    };
  },
  methods: {
    signUpUser() {
      if (this.validateDetails()) {
        this.$store.dispatch("registerUser", this.userDetails);
        this.$router.push("/Login");
      }
    },
    validateDetails() {
      if (this.userDetails.name.length < 1) {
        this.error.name = true;
        return false;
      }
      if (this.userDetails.email.length < 1) {
        this.error.email = true;
        return false;
      }
      if (this.userDetails.address.street.length < 1) {
        this.error.street = true;
        return false;
      }
      if (this.userDetails.address.zip.length < 1) {
        this.error.zip = true;
        return false;
      }
      if (this.userDetails.address.city.length < 1) {
        this.error.city = true;
        return false;
      }
      if (this.userDetails.password.length < 1) {
        this.error.password = true;
        return false;
      }
      // if (this.userDetails.pswRepeat.length < 1) {
      //   this.error.pswRepeat = true;
      //   return false;
      // }
      // if (this.userDetails.pswRepeat === this.userDetails.psw) {
      //   this.error.pswRepeat = true;
      //   return false;
      // }
      return true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
* {
  font-family: "Work Sans", sans-serif;
}

h1 {
  background-color: #e5e5e5;
  color: #888888;
}

.container {
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #eeeeee;
  padding: 1rem;
  align-items: center;
  margin-left: 15rem;
}

.btn {
  background-color: #f79e1b;
  color: white;
  padding: 1rem;
  border-radius: 2%;
  border: none;
}
</style>
