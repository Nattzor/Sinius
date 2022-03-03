<template>
  <div v-if="user" class="user-account">
    <h1>Name: {{ user.name }}</h1>
    <h1>Email: {{ user.email }}</h1>
    <h1>Role: {{ user.role }}</h1>
    <br />
    <div v-if="order" class="order-history">
      <h1>
        Order History:
        <br />
        <br />
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
          <div v-for="(item, index) in order.items" :key="index">
            <br />
            Product Id: {{ item.ProductId }}
            <br />
            Amount: {{ item.amount }}
            <br />
            Pride: {{ item.price }}
            <br />
            Subtotal: {{ item.price * item.amount }}
            <br />
            <br />
          </div>
        </h3>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    user() {
      return this.$store.getters.currentUser[0];
    },
    order() {
      return this.$store.getters.getOrderHistory[0];
    },
  },
};
</script>

<style scoped>
.Category {
  position: absolute;
}
.order-history {
  width: 100%;
}
</style>
