<template>
  <div class="hero"
    v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }"
  >
    <h1> Welocme to Swedens biggest online skateboard store! <br> We have everything you want and more </h1>
    <button class="toShopBtn"><router-link class="toShopBtn" to="/Products"> CHECK OUT THE STORE</router-link> </button>
  </div>
</template>

<script>
export default {
    data() {
    return {
      backgroundImage: require("@/assets/hero.png"),
    };
  },
};
</script>

<style scoped>
* {
   font-family: "Work Sans", sans-serif;
}
.hero {
  text-align: center;
    background-size: 100%;
    height: 40rem;
   background-repeat: no-repeat;
}

h1 {
  color: white;
  text-align: center;
  padding-top: 10rem;
}

.toShopBtn {
  margin: 5rem;
  color: white;
  border-color: white;
  padding: 1rem;
  border-radius: 100px;
  background-color: Transparent;
}
</style>