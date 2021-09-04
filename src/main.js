import { createApp } from "vue";

import App from "./components/App.vue";

import router from "./router";
import store from "./store";

import "@/shared/styles/reset.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
