<template>
  <div>
    <Category />
    <h1>All products should be shown</h1>
    <ProductCard />
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { Category, ProductCard },
};
</script>

<style>
</style>