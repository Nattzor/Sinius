<template>

<article>
  <h2>Review items and shipping</h2>
   <h2>Ship to</h2>
<form class="checkout">
  <div class="formGroup">
  <label for="country">Country or region</label>
  <select id="country" v-model="country">
  <option v-for="(country, index) in countries"
  :value="country.value"
  :key="index">
  {{country.label}}
  </option>
  </select>
  </div>

<div class="formGroup">
  <label for="firstname">First name</label>
  <input type="firstname" name="firstname" required >
  </div>


  <div class="formGroup">
  <label for="lastname">Last name</label>
  <input type="lastname" name ="lastname" required >
  </div>


  <div class="formGroup">
  <label for="streetadress">Street adress</label>
  <input type="streetadress" name ="streetadress" required >
  </div>

  <div class="formGroup">
  <label for="streetadressOp">Street adress 2(optional)</label>
  <input type="streetadressOp" name="streetadressOp" required >
  </div>

  <div class="formGroup">
  <label for="city">City</label>
  <input type="city" name="city" required>
  </div>

  <div class="formGroup">
  <label for="state">State/Province/Region</label>
  <input type="state" name ="state" required >
  </div>

  <div class="formGroup">
  <label for="zipcode">ZIP code</label>
  <input type="zipcode" name ="zipcode" required >
  </div>

  <div class="formGroup">
  <label for="emailAdress">Email address</label>
  <input type="emailAdress" name ="emailAdress" required >
  </div>

  <div class="formGroup">
  <label for="confirmEmail">Confirm email</label>
  <input type="confirmEmail" name="confirmEmail" required >
  </div>
  

  <div class="formGroup">
  <label for="countryCode">Country Code</label>
  <input type="countryCode" name="countryCode" required >
  </div>
  

  <div class="formGroup">
  <label for="phoneNumber">Phone number(required)</label>
  <input type="phoneNumber" name ="phoneNumber" required >
  </div>

   </form>
  <button type="done" class="btnD">Done</button>
  <h2>Pay with </h2>
  <div class="payWithAll">
  
<div class="payWithOne">
<input class="visa-input"  type="radio"  value="visa"  name="excards"  id="visa"  v-model="cards">
<fa class="icon" icon="fa-brands fa-cc-visa" />
<label class="visa-label" for="visa">Visa/Mastercard</label>
</div>
<div class="payWithTwo">
<input class="paypal-input"  type="radio"  value="paypal"  name="excards"  id="paypal"  v-model="cards">
<fa class="icon" icon="fa-brands fa-cc-paypal" />
<label class="paypal-label" for="paypal">PayPal</label>
</div>
<div class="payWithThree">
<input class="klarna-input"  type="radio"  value="klarna"  name="excards"  id="klarna"  v-model="cards">
<fa class="icon" icon="fa-solid fa-credit-card" />
<label class="klarna-label" for="klarna">Klarna</label>
</div>
  </div>
<button type="confirm" class="btnCon">Confirm and pay</button>
</article>
  
</template>

<script>
export default {
  data(){
    return {
      country: 'SWEDEN',
      firstname: '',
      lastname: '',
      streetadress: '',
      streetadressOp: '',
      city: '',
      state: '',
      zipcode: '',
      emailAdress: '',
      confirmEmail: '',
      countryCode: '',
      phoneNumber: '',
      countries:[
        {
          label:'Sweden',
          value:'Sweden'
        },
        {
          label: 'Finland',
          value:'Finland'

        },
        {
          label:'Norway',
          value:'Norway'
        }
      ]
     
    }
  }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quando&family=Work+Sans:wght@100&display=swap");
*{
  font-family: Work Sans;
}
.h2{
font-family: 'Quando';
font-style: normal;
font-weight: normal;
line-height: 30px;
color: #000000;

}
.checkout {
font-family: 'Work Sans';
font-size: 10px;
line-height: 23px;
color:gray;
opacity: .6;
display:grid;
grid-template-columns:auto auto;
grid-row-gap:10px;
margin: 0.5rem;
padding: 2rem;

}

.btnD{
  background-color: #F79E1B;
  color: white;
  padding: 1rem;
  width: 120px;
  height: 49px;
  border-radius: 10px;
  margin-left: 1000px;
}

.payWithAll{
font-family: Work Sans;
font-size: 15px;
line-height: 23px;
color:gray;
opacity: .6;
margin: 0.5rem;
padding: 2rem;
}

.btnCon{
  background-color: #F79E1B;
  color: white;
  padding: 1rem;
   width: 150px;
  height: 49px;
  border-radius: 10px;
   margin-left: 1000px;
   margin-bottom: 20px;
  

}


</style>

