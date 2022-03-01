import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api";

Vue.use(Vuex);

Vue.filter("toCurrency", function (value) {
  if (typeof value !== "number") {
    return value;
  }
  const formatter = new Intl.NumberFormat("sv", {
    style: "currency",
    currency: "SEK",
  });
  return formatter.format(value);
});
//const cart = localStorage.getItem('sinus-cart') ?
//JSON.parse(localStorage.getItem('sinus-cart')) :

export default new Vuex.Store({
  state: {
    email: null,
    items: {},
    shippingAddress: {},
    cart: [],
    price: [],
    itemList: [],
    products: [],
    currentUser: [],
    users: [],
    state: [],
    orderHistory: [],
    checkOutStatus: null,
  },
  mutations: {
    saveAuthData(state, authData) {
      state.token = authData.token;
      state.email = authData.email;
    },
    saveItems(state, items) {
      for (let singleItem of items) {
        state.itemList.push(singleItem);
        Vue.set(state.items, singleItem.id, singleItem);
      }
    },
    saveItemsInCart(state, singleItem) {
      const inCart = state.cart.find(
        (cartItem) => cartItem.id == singleItem.id
      );
      if (inCart) {
        inCart.amount++;
      } else {
        state.cart.push({
          id: singleItem.id,
          amount: 1,
          price: singleItem.price,
        });
      }
      //localStorage.setItem("snius-cart", JSON.stringify(state.cart))
    },
    updateCartItem(state, { id, amount }) {
      const inCart = state.cart.find((cartItem) => cartItem.id == id);
      inCart.amount = amount;
    },
    removeCartItem(state, { id }) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.id !== id;
      });
    },
    userPush(state, user) {
      state.users.push(user);
    },
    authUsers(state, user) {
      state.currentUser.push(user);
    },
    ordersPlaced(state, order) {
      state.orderHistory.push(order);
    },
    shippingAddress(state, address) {
      state.shippingAddress.push(address);
    },
    setCheckoutStatus(state, status) {
      state.checkOutStatus = status;
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
  getters: {
    cart(state) {
      return state.cart.map((cartItem) => ({
        id: cartItem.id,
        ...state.items[cartItem.id],
        amount: cartItem.amount,
        price: cartItem.price,
      }));
    },
    cartProductId(state) {
      return state.cart.map((cartItem) => ({
        productId: cartItem.id,
      }));
    },
    cartItemCounter(state) {
      let totalAmount = 0;
      state.cart.forEach((cartItem) => {
        totalAmount += cartItem.amount;
      });
      return totalAmount;
    },
    currentUser(state) {
      return state.currentUser;
    },
    total(state) {
      let total = 0;
      state.cart.forEach((cartItem) => {
        total += cartItem.price * cartItem.amount;
      });
      return total;
    },
    getOrderHistory(state) {
      return state.orderHistory;
    },
  },
  actions: {
    async fetchItems(context) {
      const response = await API.getItems();
      context.commit("saveItems", response.data);
    },
    addToCart({ commit }, singleItem) {
      commit("saveItemsInCart", singleItem);
    },
    updateCart({ commit }, { id, amount }) {
      commit("updateCartItem", { id, amount });
    },

    async checkout( context, payload ) {
      console.log(payload);
      const response = await API.PlacedOrder(
          context.state.items,
          payload.shippingAddress,
        );
        console.log(response.data)
        context.commit("ordersPlaced", response.data);
    },

    async registerUser(context, credentials) {
      const response = await API.registerUser(
        credentials.email,
        credentials.name,
        credentials.password,
        credentials.address
      );
      API.saveToken(response.data.token);

      console.log(response.data);
      context.commit("userPush", response.data);
    },
    async authUser(context, credentials) {
      const response = await API.authUser(
        credentials.email,
        credentials.password
      );
      API.saveUserToken(response.data.token);

      console.log(response.data);
      context.commit("userPush", response.data);
    },
    async userAccount(context) {
      const response = await API.userAccount();
      API.userAuthToken(response.data.token);

      console.log(response.data);
      context.commit("authUsers", response.data);
    },
    removeFromCart({ commit }, { id }) {
      commit("removeCartItem", { id });
    },
  },
  modules: {},
});
