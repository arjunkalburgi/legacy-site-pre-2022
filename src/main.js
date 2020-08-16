import Vue from "vue";
import App from "./App.vue";

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueParallaxJs from "vue-parallax-js";
Vue.use(VueParallaxJs);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
