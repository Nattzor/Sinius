<template>
  <div
    id="app"
    v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }"
  >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  data() {
    return {
      backgroundImage: require("@/assets/WhiteAndGrayVectorBackground.jpg"),
    };
  },
};
</script>

<style>
* {
  margin: 0;
  text-decoration: none;
}
#app {
  background-size: cover;
  background-repeat: repeat;
  background-position: center center;
}
</style>