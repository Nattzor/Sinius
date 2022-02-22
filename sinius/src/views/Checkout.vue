<template>
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
  <input
  id="firstname"
  type="firstname"
   v-model="firstname"
  >
  </div>


  <div class="formGroup">
  <label for="lastname">Last name</label>
  <input
  id="lastname"
  type="lastname"
   v-model="lastname"
  >
  </div>


  <div class="formGroup">
  <label for="streetadress">Street adress</label>
  <input
  id="streetadress"
  type="streetadress"
   v-model="streetadress"
  >
  </div>

  <div class="formGroup">
  <label for="streetadressOp">Street adress 2(optional)</label>
  <input
  id="streetadressOp"
  type="streetadressOp"
   v-model="streetadressOp"
  >
  </div>

  <div class="formGroup">
  <label for="city">City</label>
  <input
  id="city"
  type="city"
   v-model="city"
  >
  </div>

  <div class="formGroup">
  <label for="state">State/Province/Region</label>
  <input
  id="state"
  type="state"
   v-model="state"
  >
  </div>

  <div class="formGroup">
  <label for="zipcode">ZIP code</label>
  <input
  id="zipcode"
  type="zipcode"
   v-model="zipcode"
  >
  </div>

  <div class="formGroup">
  <label for="emailAdress">Email address</label>
  <input
  id="emailAdress"
  type="emailAdress"
   v-model="emailAdress"
  >
  </div>

  <div class="formGroup">
  <label for="confirmEmail">Confirm email</label>
  <input
  id="confirmEmail"
  type="confirmEmail"
   v-model="confirmEmail"
  >
  </div>
  

  <div class="formGroup">
  <label for="countryCode">Country Code</label>
  <input
  id="countryCode"
  type="countryCode"
   v-model="countryCode"
  >
  </div>
  

  <div class="formGroup">
  <label for="phoneNumber">Phone number(required)</label>
  <input
  id="phoneNumber"
  type="phoneNumber"
   v-model="phoneNumber"
  >
  </div>
  <button type="done" class="btn">Done</button>
  </form>
  
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

</style>