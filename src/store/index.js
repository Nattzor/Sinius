import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api";

Vue.use(Vuex);



//const cart = localStorage.getItem('sinus-cart') ? 
//JSON.parse(localStorage.getItem('sinus-cart')) : 
//[]

export default new Vuex.Store({
  state: {
    email: null,
    items: {},
    cart: [],
    price: [],
    itemList: []
  },
  mutations: {
    saveAuthData(state, authData) {
      // state.token = authData.token
      state.email = authData.email;
      state.price = authData.price;
    },
    saveItems(state, items) {
      for(let singleItem of items){
        state.itemList.push(singleItem)
        Vue.set(state.items, singleItem.id, singleItem)
      }
    },
  
    saveItemsInCart(state, singleItem){
      const inCart = state.cart.find(cartItem => cartItem.id == singleItem.id)
      if(inCart){
        inCart.amount++
      }else{
    state.cart.push({id: singleItem.id, amount: 1})
  }
  //localStorage.setItem("snius-cart", JSON.stringify(state.cart))
    },
    updateCartItem(state, {id, amount}){
      const inCart = state.cart.find(cartItem => cartItem.id == id)
      
      inCart.amount = amount
    }
   
  },
  getters: {
    getItemsByCategory: state => category => state.itemList.filter(itemList => itemList.category == category),

    cart(state){
      return state.cart.map(cartItem => ({
        id: cartItem.id,
        ...state.items[cartItem.id],
        amount: cartItem.amount
      }))
    }
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
    addToCart({commit}, singleItem) {
      commit('saveItemsInCart', singleItem)
    },
    updateCart({commit}, {id, amount}){

      commit('updateCartItem', {id, amount})
    }
    
  },
  modules: {},

  
});
