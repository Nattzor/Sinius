import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: null,
    items: [],
    cart: [],
    price: [],
    products: [],
  },
  mutations: {
    saveAuthData(state, authData) {
      // state.token = authData.token
      state.email = authData.email;
      state.price = authData.price;
    },
    saveItems(state, items) {
      state.items = items;
    },
    addToCart(state, item) {
      state.cart.push(item)
    }
  },
  getters: {
    getItemsByCategory: state => category => state.items.filter(items => items.category == category)
   },
  actions: {
    async authenticate(context, credentials) {
      const response = await API.login(credentials.email, credentials.password);
      console.log(response);
      API.saveToken(response.data.token);

      context.commit("saveAuthData", response.data);
    },
    async fetchItems(context) {
      const response = await API.getItems();
      context.commit("saveItems", response.data);
    },
  },
  modules: {},

  
});
