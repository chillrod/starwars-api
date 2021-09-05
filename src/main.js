import { createApp } from "vue";

import PrimeVue from "primevue/config";
import App from "./components/App.vue";

import router from "./router";
import store from "./store";

import "@/shared/styles/reset.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "mosha-vue-toastify/dist/style.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.mount("#app");
