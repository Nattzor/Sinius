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
    currentUser: [],
    users: [],
    state: [],

  },
  mutations: {
    saveAuthData(state, authData) {
      state.token = authData.token;
      state.email = authData.email;
    },
    saveItems(state, items) {
      state.items = items;
    },
    addToCart(state, item) {
      state.cart.push(item);
    },
    userPush(state, user) {
      state.users.push(user);
    },
    authUsers(state, user) {
      state.users.push(user);
    },
  },
  getters: {
    getItemsByCategory: state => category => state.items.filter(items => items.category == category),
    currentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    // async authenticate(context, credentials) {
    //   const response = await API.login(credentials.email, credentials.password);
    //   console.log(response);
    //   API.saveToken(response.data.token);

    //   context.commit("saveAuthData", response.data);
    // },
    async fetchItems(context) {
      const response = await API.getItems();
      context.commit("saveItems", response.data);
    },
    async registerUser(context, credentials) {
      const response = await API.registerUser(credentials.email, credentials.name, credentials.password, credentials.address);
      API.saveToken(response.data.token);
      
      console.log(response.data);
      context.commit("userPush", response.data);
    },
    async authUser(context, credentials) {
      const response = await API.authUser(credentials.email, credentials.password);
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
  },
  modules: {},
});
