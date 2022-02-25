<template>
  <div class="SingleProductCard">
    <Category class="Category" />
    <div class="positioning">
      <div class="singleCardInfo">
        <img
          class="displayedProduct"
          :src="'http://localhost:5000/images/' + item.imgFile"
          alt="Blue Sweater"
        />
        <h1 class="productName">
          {{ item.title }} Sinus {{ item.category }}
        </h1>
        <div class="tagPriceCart">
          <div class="tagAndPrice">
            <fa class="priceTag" icon="fa-solid fa-tag" rotation="90" />
            <h2 class="productPrice">{{ item.price }}kr</h2>
          </div>
          <button class="add-to-cart" @click="addToCart(item)">
            <i class="gg-shopping-cart"></i> ADD TO CART
          </button>
        </div>
        <div class="cirles">
          <div class="redCircle"></div>
          <div class="grayCircle"></div>
          <div class="darkGreenCircle"></div>
          <div class="blueCircle"></div>
        </div>
        <p class="chooseSize">
          <select id="size" required>
            <option disabled selected value>Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </p>
        <h3 class="productDescription">{{item.longDesc}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
export default {
  components: { Category },
  data() {
    return {};
  },
  methods: {
    addToCart(item){
      this.$store.dispatch('addToCart', item)
    },
  },
  computed: {
    item() {
      return this.$store.state.itemList.find(
        (item) => item.id == this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
@import url("https://css.gg/shopping-cart.css");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quando&display=swap");
.SingleProductCard {
  display: grid;
  grid-template-columns: auto auto;
}
.singleCardInfo {
  width: 46vw;
  height: 55vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr 50px);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  padding-top: 9.5rem;
}
.displayedProduct {
  background-color: rgba(204, 204, 204, 0.5);
  border: 3px solid black;
  grid-area: 1 / 1 / 6 / 2;
  width: 90%;
}
.productName {
  grid-area: 1 / 2 / 2 / 3;
}
.tagPriceCart {
  display: grid;
  grid-template-columns: auto auto;
}
.priceTag {
  font-size: 20px;
  justify-self: flex-end;
}
.tagAndPrice {
  display: grid;
  grid-template-columns: auto auto;
}
.add-to-cart {
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  text-align: center;
  font-size: 11px;
  width: 120px;
  height: 33px;
  background: #407ba9;
  box-shadow: 2px 4px 4px rgba(0, 0 0.25 0.25 0.25);
  border-radius: 100px;
  color: white;
  cursor: pointer;
}
.cirles {
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 132px;
  height: 27px;
  grid-area: 3 / 2 / 4 / 3;
  cursor: pointer;
}
.redCircle {
  background: #ff0000;
  border-radius: 50%;
  width: 27px;
  height: 27px;
}
.grayCircle {
  background: #7c7d7d;
  border-radius: 50%;
  width: 27px;
  height: 27px;
}
.darkGreenCircle {
  background: #0c4b23;
  border-radius: 50%;
  width: 27px;
  height: 27px;
}
.blueCircle {
  background: #264d77;
  border-radius: 50%;
  width: 27px;
  height: 27px;
}
.chooseSize {
  grid-area: 4 / 2 / 5 / 3;
}
#size {
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-start;
  border-radius: 8px;
  width: 280px;
  height: 60px;
  font-size: 24px;
}
.productDescription {
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  grid-area: 5 / 2 / 6 / 3;
}
.productHeaders h2 {
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
}
</style>