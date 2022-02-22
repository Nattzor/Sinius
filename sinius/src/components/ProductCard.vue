<template>
  <div class="product-card">
    <img
      class="product-img"
      :src="require(`@/assets/products-img/sweater-ash.png`)"
      alt="The image of the product"
    />

    <h1 class="product-card-name">Sinius Hoodie Series</h1>
    <h1 class="product-card-price">399 Kr</h1>
    <button class="add-to-cart">
      <i class="gg-shopping-cart"></i> ADD TO CART
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
@import url("https://css.gg/shopping-cart.css");
.product-card {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 223px;
  height: 451px;
  left: 365px;
  top: 942px;
  background: rgba(204, 204, 204, 0.5);
}
.product-img {
  margin-top: 20px;
  width: 203px;
  height: 221px;
}
.product-card-name {
  margin-top: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 1500;
  font-size: 20px;
  line-height: 16px;
  color: #000000;
}
.product-card-price {
  margin-top: 25px;
  color: red;
}
.add-to-cart {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 11px;
  width: 120px;
  height: 33px;
  background: #407ba9;
  box-shadow: 2px 4px 4px rgba(0, 0 0.25 0.25 0.25);
  border-radius: 100px;
  color: white;
}
</style>