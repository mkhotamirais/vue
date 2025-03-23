import "./assets/main.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(ToastService)
  .use(router)
  .mount("#app");
