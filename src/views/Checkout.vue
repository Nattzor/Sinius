<template>
  <article>
    <h2>Review items and shipping</h2>
    <h2>Ship to</h2>
    <form @submit.prevent="sendOrder">
      <div class="container">
        <label for="country">Country or region</label>
        <select id="country" v-model="userDetails.country">
          <option
            v-for="(country, index) in userDetails.countries"
            :value="country.value"
            :key="index"
          >
            {{ country.label }}
          </option>
        </select>
        <label for="Fname">Name </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          v-model="userDetails.name"
          required
        />

        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          v-model="userDetails.emailAddress"
          required
        />

        <label for="street">Street Address</label>
        <input
          type="text"
          placeholder="Street Address"
          name="street"
          v-model="userDetails.shippingAddress.street"
          required
        />

        <label for="city">City</label>
        <input
          type="text"
          placeholder="City"
          name="city"
          v-model="userDetails.shippingAddress.city"
          required
        />

        <label for="zip">Zip</label>
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          v-model="userDetails.shippingAddress.zip"
          required
        />

        <label for="state">State/Province/Region</label>
        <input
          type="text"
          placeholder="State"
          name="state"
          v-model="userDetails.state"
          required
        />

        <label for="phone">Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone number"
          name="phone"
          v-model="userDetails.phoneNumber"
          required
        />
      </div>
      <div class="containerCard">
        <h2>Pay with</h2>
        <div class="card">
          <input
            type="radio"
            value="visa"
            name="excards"
            id="visa"
            v-model="cards"
          />
          <fa class="icon" icon="fa-brands fa-cc-visa" />
          <label for="visa">Visa/Mastercard</label>
        </div>

        <div class="card">
          <input
            type="radio"
            value="paypal"
            name="excards"
            id="paypal"
            v-model="cards"
          />
          <fa class="icon" icon="fa-brands fa-cc-paypal" />
          <label for="paypal">PayPal</label>
        </div>

        <div class="card">
          <input
            type="radio"
            value="klarna"
            name="excards"
            id="klarna"
            v-model="cards"
          />
          <fa class="icon" icon="fa-solid fa-credit-card" />
          <label for="klarna">Klarna</label>
        </div>
        <label for="cardHolder">Cardholder Name</label><br />
        <input
          v-model="cardInfo.name"
          type="text"
          id="cardHolder"
          placeholder="Firstname Lastname"
          required
        />
        <label for="cardNum">Card Number</label><br />
        <input
          v-model="cardInfo.cardNum"
          type="text"
          id="cardNum"
          maxlength="16"
          required
        />
        <label for="month">Month</label>
        <select name="month" v-model="cardInfo.month">
          <option v-for="month in months" :key="month" value:value="month">
            {{ month }}
          </option>
        </select>
        <label for="year">Year</label>
        <select name="year" v-model="cardInfo.year">
          <option v-for="year in years" :key="year" name="year">
            {{ year }}
          </option>
        </select>
        <label for="cardCcv">CCV</label><br />
        <input
          v-model="cardInfo.ccv"
          type="text"
          id="cardCcv"
          maxlength="3"
          required
        />
        <button type="confirm" class="btn">Confirm and pay</button>
        <p v-if="$store.state.checkOutStatus">
          {{ $store.state.checkOutStatus }}
        </p>
      </div>
    </form>
  </article>
</template>

<script>
export default {
  data() {
    return {
      userDetails: {
        name: "ced",
        shippingAddress: {
          city: "sf",
          street: "sf",
          zip: "sf",
        },
        state: "wef",
        emailAddress: "ewf",
        phoneNumber: "qfe",
        country: "SWEDEN",
        countries: [
          {
            label: "Sweden",
            value: "Sweden",
          },
          {
            label: "Finland",
            value: "Finland",
          },
          {
            label: "Norway",
            value: "Norway",
          },
        ],
      },
      cardInfo: {
        cardNum: "f",
        year: "2022",
        month: "2",
        ccv: "123",
      },
      cards: "",
      months: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      years: ["2022", "2023", "2024", "2025", "2026", "2027"],
      productId: [],
    };
  },
  methods: {
    sendOrder() {
      this.$store.dispatch("checkout", this.userDetails);
      this.$router.replace("/placedOrder");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
* {
  font-family: "Work Sans", sans-serif;
}

h1 {
  background-color: #e5e5e5;
  color: #888888;
}

.container {
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #eeeeee;
  padding: 1rem;
  align-items: center;
  margin-left: 15rem;
}

.containerCard {
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: #eeeeee;
  padding: 1rem;
  align-items: center;
  margin-left: 15rem;
}

.card {
  padding: 1rem;
  margin-left: 2rem;
}

.icon {
  margin-right: 1rem;
  margin-left: 1rem;
}

.btn {
  background-color: #f79e1b;
  color: white;
  padding: 1rem;
  border-radius: 2%;
  border: none;
}
</style>
