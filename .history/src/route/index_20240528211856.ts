import { createMemoryHistory, createRouter } from "vue-router";

import TheExperience from "../components/TheExperience.vue";
import TheOther from "../components/TheOther.vue";
const routes = [
  { path: "/", component: TheExperience },
  { path: "/other", component: TheOther },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
