import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import './assets/style/reset.css'
import './assets/style/_type.scss'
import './assets/style/_variables.scss'

new Vue({
  render: h => h(App)
}).$mount("#app");
