<template>
<div class="container">
  <div class="cart-title">
  <h1>Cart</h1>
  </div>
  <div class="coupon-container">
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
  </div>











<router-link to="/Checkout"> Checkout </router-link>
</div>
</template>

<script>
export default {
};
</script>

<style>
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
flex-direction: column;
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

</style>