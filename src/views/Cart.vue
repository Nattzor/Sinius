<template>
<div class="container">
  <div class="cart-title">
  <h1>Cart</h1>
  </div>
  <div class="coupon-container">
<div class="shipping-wrap">
  <h1>Shipping</h1>
  <hr class="hr-shipping">
  <h2>Free Shipping if purchase subseeds x </h2>
  </div>
    <div class="coupoun-wrap">
    <div class="coupon-one">
      <div class="coupon-info">
        <div class="info-p">
          <p>10%<p>
          <p>discount code</p>
          <p>discount code</p>
          </div>
      </div>
      <hr class="hr-line">
    <div class="coupon-text">
      <p>Buy up to 399Kr and get a Sinus <br> code worth 10%</p>
    </div>
    <div class="coupon-btn">
      <p>Checkout coupon</p>
    </div>
    </div>

    <div class="coupon-one">
      <div class="coupon-info">
        <div class="info-p">
          <p>20%<p>
          <p>discount code</p>
          <p>discount code</p>
          </div>
      </div>
      <hr class="hr-line">
    <div class="coupon-text">
      <p>Buy up to 399Kr and get a Sinus <br> code worth 10%</p>
    </div>
    <div class="coupon-btn">
      <p>Checkout coupon</p>
    </div>
    </div>
        <div class="coupon-one">
      <div class="coupon-info">
        <div class="info-p">
          <p>30%<p>
          <p>discount code</p>
          <p>discount code</p>
          </div>
      </div>
      <hr class="hr-line">
    <div class="coupon-text">
      <p>Buy up to 399Kr and get a Sinus <br> code worth 10%</p>
    </div>
    <div class="coupon-btn">
      <p>Checkout coupon</p>
    </div>
    </div>
    <div class="coupon-input-container">
    <input class="coupon-input" type="text" placeholder="Use your code here">
    <button class="coupon-input-btn">Apply coupon</button>
    </div>
    </div>
  </div>
  <div class="items-wrapper">
    <div class="cart-items">
      <h1>Your Items (15)</h1>
      <hr>
      <div class="cart-items-desc">
        <h1>Items</h1>
        <h1>Description</h1>
        <h1>Price</h1>
        <h1>Amount</h1>
        <h1>Total Amount</h1>
      </div>
      <hr>
    </div>
<div>
  <div class="cart-item-wrapper">
<li class="cart-li" v-for="cartItem in cart" :key="cartItem.id">
         <img
        class="cart-img"
        :src="'http://localhost:5000//images/' + cartItem.imgFile"
        alt="The image of the product"
      />
          <label class="cart-desc">
            {{cartItem.title}}
            {{cartItem.shortDesc}}
          </label>
           <label class="cart-price">{{cartItem.price}} Kr</label>
          <button @click="increase(cartItem)">+</button>
          {{cartItem.amount}}
          <button :disabled="cartItem.amount <= 1" @click="decrease(cartItem)">-</button>
         <a href="#" class="close"  @click.prevent="removeFromCart(cartItem)">X remove</a>
        </li>
        <h1> TOTAL AMOUNT:{{total}} </h1>
        </div>
</div>



<router-link class="checkout-cart" to="/Checkout"> Checkout </router-link>
  </div>
  











</div>
</template>

<script>
export default {
  computed: {
    cart(){
      return this.$store.getters.cart
  },
 total(){
            return this.$store.getters.total;
        }
  },
  methods: {
    removeFromCart(cartItem){
    this.$store.dispatch('removeFromCart', {id: cartItem.id})
    },
    increase(cartItem){
      this.$store.dispatch('updateCart', {id: cartItem.id, amount: cartItem.amount++})
    },
    decrease(cartItem){
      this.$store.dispatch('updateCart', {id: cartItem.id, amount: cartItem.amount--})
    },
   
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  background: #FFFCFC;
  
}
.cart-title{
width: 100%;
background: #E5E5E5;
height: 7rem;
margin:0 auto;

}
.cart-title h1{
font-family: "Work Sans", sans-serif;
font-style: italic;
font-weight: lighter;
font-size: 85px;
margin-left: 7rem;
}
.coupon-container{
width: 1120px;
height: 339px;
background: rgba(204, 204, 204, 0.5);
align-self: center;
margin: 2rem;
display: flex;
flex-direction: row-reverse;
}
.coupon-one{
width: 554px;
height: 66px;
background: #FFFCFC;
margin: 1rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
}
.coupon-info{
 display: inline-block;
 display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
}
.info-p p:first-child{
color: red;
}
.info-p p:nth-child(4n){
background: #E96D6D;
width: 80px;
height: 12px;
border-radius: 2px;
color: #E5E5E5;
text-align: center;

}
.coupon-info p{
  margin: 8px;
  font-size: 10px;
   flex-wrap: wrap;
}
.hr-line{
width: 50px;
height: 0px;
display: inline-block;
border: 1px solid #000000;
transform: rotate(-90deg);
}
.coupon-text p{
  font-size: 12px;
}
.coupon-btn {
width: 93px;
height: 34px;
text-align: center;
background: #E96D6D;
border-radius: 6px;
display: flex;
align-content: center;
margin: 10px;
}
.coupon-btn p{
font-family: Quattrocento Sans;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 18px;
color: #FFFFFF;
align-self: center;
}
.coupon-input{
width: 272px;
height: 54px;
text-align: center;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 40px;
margin-right: 3rem;
margin-left: 2rem;
}
.coupon-input:active,
.coupon-input:focus,
.coupon-input:hover {
	border-color: #1e16af;
	outline: none;
}
.coupon-input-container{
display: flex;
flex-direction: row;

}
.coupon-input-btn{
width: 138px;
height: 54px;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 40px;
}
.hr-shipping{
width: 235px;
height: 0px;
border: 2px solid #757575;
}
.shipping-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.checkout-cart{
width: 445px;
height: 94px;
background: #F79E1B;
border-radius: 10px;
font-family: Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 25px;;
text-align: center;
color: #FFFFFF;
}
.items-wrapper{
width: 1168px;
height: 1756px;
align-self: center;

}
.cart-items hr{
  width: 1120px;
height: 0px;
left: 24px;
top: 54px;
border: 1px solid #7C7D7D;
}
.cart-items-desc{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cart-img{
  width: 7rem;
  height: 8rem;
}
.cart-item-wrapper{
  display: flex;
  flex-direction: column;
}
.close {
 cursor: pointer;
 
  top: 50%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
  color: red;
}
.close:hover {
 font-size: 2rem;
}
</style>