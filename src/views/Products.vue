<template>
  <div>
    <Category class="Category" />
    <div class="productPlacement">
      <article class="productGrid">
        <ProductCard v-for="item in items" :key="item.id" :singleItem="item"/>
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
    }
    },
        mounted() {
     this.$store.dispatch('fetchItems')
     },
   computed: {
      items() {
        return this.$store.state.items;
      },

 }
 }
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