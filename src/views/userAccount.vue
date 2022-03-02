<template>
  <div v-if="user" class="userAccount">
    <h1>Name: {{ user.name }}</h1>
    <h1>Email: {{ user.email }}</h1>
    <h1>Role: {{ user.role }}</h1>
    <div v-if="getOrderHistory" class="orderHistory">
      <h1>
        Order History:
        <h3>
          Order Status: {{ getOrderHistory.status }}
          <br />
          <div v-for="item in getOrderHistory.items" :key="item.id">
            <h2>jsiuhgeös</h2>
            Order id: {{ getOrderHistory.items[item].OrderId }}
            <br />
            Product Id: {{ getOrderHistory.items[item].ProductId }}
            <br />
            Amount: {{ getOrderHistory.items[item].amount }}
            <br />
            Id: {{ getOrderHistory.items[item].id }}
            <br />
            Price: {{ getOrderHistory.items[item].price }}
          </div>
        </h3>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // getItems() {
    //   this.$store.getters.getOrderHistory.map((item) => ({
    //     id: item.id
    //   }))
    // },
  },
  computed: {
    user() {
      return this.$store.getters.currentUser[0];
    },
    getOrderHistory() {
      console.log(this.$store.getters.getOrderHistory[0]);
      return this.$store.getters.getOrderHistory[0];
    },
  },
};
</script>

<style scoped>
.Category {
  position: absolute;
}
.orderHistory {
  width: 100%;
  display: grid;
}
.orderHistory h1 {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
