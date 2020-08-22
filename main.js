

import App from "./App.vue";
import Vue from 'vue/dist/vue.js';

Vue.config.productionTip = false;



new Vue({
  render: h => h(App)
}).$mount("#app");
