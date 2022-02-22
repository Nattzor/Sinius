<template>
  <div
    id="app"
    v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }"
  >
    <Header />
<<<<<<< HEAD
   
    <router-view/>
=======
    <router-view />
>>>>>>> 55d51a2ae446ceec99556797d469c486a5100be6
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
<<<<<<< HEAD
  components: { Header, Footer,  },
=======
  components: { Header, Footer },
  data() {
    return {
      backgroundImage: require("@/assets/WhiteAndGrayVectorBackground.jpg"),
    };
  },
>>>>>>> 55d51a2ae446ceec99556797d469c486a5100be6
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