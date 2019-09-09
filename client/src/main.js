import Vue from "vue";
import vSelect from "vue-select";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import apolloProvider from "./provider";

import "vue-datetime/dist/vue-datetime.css";
import "vue-select/dist/vue-select.css";

import { fetchCurrentUser } from "./graphql/queries";

// Global event bus
Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false;

Vue.component("v-select", vSelect);

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  async created() {
    const token = localStorage.getItem("meetup-token");

    if (token) {
      const {
        data: { currentUser }
      } = await this.$apollo.query({ query: fetchCurrentUser });

      this.$store.dispatch("auth/autoLogin", currentUser);
    }
  }
}).$mount("#app");
