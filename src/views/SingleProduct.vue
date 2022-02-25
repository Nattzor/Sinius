<template>
  <div>
    <SingleProductCard />
    <div class="productInfo">
      <div class="productHeaders">
        <h2>Overview</h2>
        <h2>Reviews</h2>
        <h2>Questions</h2>
        <h2>Specifications</h2>
      </div>
      <div class="productHeaderDescription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          expedita culpa officiis tempore odio dolor rerum possimus illo magnam
          maiores dolorem, blanditiis sequi animi necessitatibus rem architecto
          repellat nisi eligendi accusamus distinctio praesentium commodi?
          Quisquam aut sequi non veritatis id?
        </p>
      </div>
    </div>
    <div class="productPlacement">
      <h1>Related Products</h1>
      <article class="productGrid">
        <ProductCard v-for="(item, index) in items" :key="index" :singleItem="item" />
      </article>
    </div>
  </div>
</template>

<script>
import SingleProductCard from "@/components/SingleProductCard.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { SingleProductCard, ProductCard },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("fetchItems");
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
};
</script>

<style scoped>
.productHeaders {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  grid-gap: 9.5rem;
  padding-bottom: 3rem;
}
.productHeaders h2 {
  cursor: pointer;
  border-bottom: 5px solid #2f88ff;
}
.productHeaderDescription {
  display: flex;
  justify-content: center;
}
.productHeaderDescription p {
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  width: 46%;
}
.productPlacement {
  display: grid;
  justify-content: center;
}
.productPlacement h1 {
  font-family: "Quando", serif;
  font-weight: normal;
  font-size: 36px;
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
}
.productGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
  justify-content: center;
  justify-items: center;
  align-items: end;
}
</style>