import { createApp } from "vue";
import "./style.css";
import "@tresjs/leches/styles";
import App from "./App.vue";
import router from "./route";

const app = createApp(App);

app.use(router).mount("#app");
