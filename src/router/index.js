import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../views/Login.vue";
import SavedProducts from "../views/SavedProducts";
import Signup from "../views/Signup.vue";
import SingleProduct from "../views/SingleProduct.vue";
import userAccount from "../views/userAccount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Products/SingleProduct/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/SavedProducts",
    name: "SavedProducts",
    component: SavedProducts,
  },
  {
    path: "/userAccount",
    name: "userAccount",
    component: userAccount,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
