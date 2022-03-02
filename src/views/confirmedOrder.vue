<template>
  <div class="confirmedOrder">
    <h1>Tack för din beställning!</h1>
    <br />
    <br />
    <ul>
      <h3>
        Order Status: {{ order.status }}
        <br />
        Order id: {{ order.id }}
        <br />
        City: {{ order.shippingCity }}
        <br />
        Street: {{ order.shippingStreet }}
        <br />
        Zip: {{ order.shippingZip }}
        <br />
      </h3>
      <li v-for="(item, index) in order.items" :key="index">
        Product Id: {{ item.ProductId }}

        Amount: {{ item.amount }}

        Pride: {{ item.price }}

        Subtotal: {{ item.price * item.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      console.log(this.$store.getters.getOrderHistory[0]);
      return this.$store.getters.getOrderHistory[0];
    },
  },
};
</script>

<style scoped>
.confirmedOrder {
  display: grid;
  justify-content: center;
}
</style>