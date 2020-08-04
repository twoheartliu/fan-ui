import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Haha from "./components/Haha.vue";
import Haha2 from './components/Haha2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Haha,
    },
    {
      path: '/haha2',
      component: Haha2
    }
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
