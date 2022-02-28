<template>
  <div v-if="user" class="userAccount">
    <h1>Name: {{user.name}}</h1>
    <h1>Email: {{user.email}}</h1>
    <h1>Role: {{user.role}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.currentUser[0];
    },
    // userDetails() {
    //   if (this.user) {
    //     console.log(this.user.name)
    //     return {
    //       name: this.user.name,
    //       // address: {
    //       //   street: this.user.address.street,
    //       //   city: this.user.address.city,
    //       //   zip: this.user.address.zip,
    //       // },
    //     };
    //   } else {
    //     return {};
    //   }
    // },
    // getUserDetails() {
    //   return this.$store.getters.currentUser;
    // },
  },
};
</script>

<style scoped>
.Category {
  position: absolute;
}
</style>