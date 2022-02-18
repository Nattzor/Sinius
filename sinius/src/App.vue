<template>
  <div id="app">
    <Header />
    <Category />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Category from './components/Category.vue';
export default {
  components: { Header, Footer, Category },
};
</script>

<style>
* {
  margin: 0;
  text-decoration: none;
}
</style>