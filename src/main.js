import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import "./element/index";
createApp(App)
  .use(router)
  .mount("#app");
