import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import { route } from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaSearch,
  MdRestaurantmenuRound,
  MdGroups,
  RiDoubleQuotesL,
  BiBookmarkFill,
  BiArrowUpRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  PrArrowUpRight,
  FaYoutube,
} from "oh-vue-icons/icons";
import theme from "./utils/theme";

addIcons(
  FaSearch,
  MdRestaurantmenuRound,
  RiDoubleQuotesL,
  MdGroups,
  FaYoutube,
  FaFacebookF,
  PrArrowUpRight,
  FaTwitter,
  FaInstagram,
  BiArrowUpRight,
  BiBookmarkFill
);
Vue.use(Chakra, {
  extendTheme: theme,
})
  .use(VueRouter)
  .component("v-icon", OhVueIcon);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: route,
});

new Vue({
  render: (h) => h(CThemeProvider, [h(App)]),
  router: router,
}).$mount("#app");
