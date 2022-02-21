<template>
  <div class="SingleProductCard">
    <div class="singleCardInfo">
      <img
        class="displayedProduct"
        src="@/assets/products-img/sweater-blue.png"
        alt="Blue Sweater"
      />
      <h1>Place Product Name Here</h1>
      <h3>Add price</h3>
      <button class="add-to-cart">
        <i class="gg-shopping-cart"></i> ADD TO CART
      </button>
      <div class="cirles">
        <div class="redCircle"></div>
        <div class="grayCircle"></div>
        <div class="darkGreenCircle"></div>
        <div class="blueCircle"></div>
      </div>
      <p>
        <select id="size" required>
          <option disabled selected value>-- Choose a size --</option>
          <option value="" disabled selected hidden></option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </p>
      <h3 class="productDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, impedit
        ipsa ut quasi itaque doloribus ipsam illo molestias, in cum tempore
        consequatur totam, id vero?
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://css.gg/shopping-cart.css");
.singleCardInfo {
  width: 889px;
  height: 507px;
  background-color: rgba(204, 204, 204, 0.5);
}
.displayedProduct {
  border: 3px solid black;
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
.cirles {
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 132px;
  height: 27px;
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
.productDescription {
  font-weight: normal;
}
</style>