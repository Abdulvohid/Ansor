import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/Routes";
import VueParticles from "vue-particles";

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


const app = createApp(App);
const plaginnewadd = [VueParticles];
plaginnewadd.forEach((el) => {
  app.use(el);
});
app.use(router);
app.mount("#app");
app.use(BootstrapVue3);
