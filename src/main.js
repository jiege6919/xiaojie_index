import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App);
app.use(Toast, {
  // 这里可以根据需要配置选项
  transition: "Vue-Toastification__fade",
});
app.mount("#xiaojie_index");
