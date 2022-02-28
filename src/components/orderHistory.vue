<template>
  <div class="orderHistory">
      <div v-if="!orderHistory" class="nothingOrdered">
          <p>Nothing has been ordered as of now...</p>
      </div>
      <ul v-else-if="orderHistory">
          <li v-for="order in orderHistory" :key ="order.id">
              <p>Order# {{order.id}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  computed: {},
  };
</script>

<style>
</style>