import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { firestorePlugin } from 'vuefire'
import './plugins/element.js'

Vue.use(firestorePlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
