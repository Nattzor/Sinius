<template>
  <div>
    <!-- <h1>All products should be shown</h1> -->
    <Category class="Category"/>
    <div class="productPlacement">
      <article class="productGrid">
        <ProductCard v-for="(product, index) in products" :key="index" />
      </article>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { Category, ProductCard },
  data() {
    return {
      products: 27,
    };
  },
};
</script>

<style scoped>
.productGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  justify-content: center;
  justify-items: center;
  align-items: end;
}
.productPlacement {
  padding-left: 25rem;
  padding-top: 9.5rem;
}
.Category {
  position: absolute;
}
</style>