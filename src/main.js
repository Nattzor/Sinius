import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

Vue.config.productionTip = false;

library.add(fas, fab);
Vue.component("fa", FontAwesomeIcon);

new Vue({
  router,
  store,
  library,
  render: (h) => h(App),
}).$mount("#app");
