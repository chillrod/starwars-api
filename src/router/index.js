import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import Home from "@/views/HomeContents/Home.vue";
import Characters from "@/views/CharacterContents/Characters.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
    meta: { characterRoutes: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.characterRoutes && !store.getters.getCharacters.length) next({ name: "Home" });
  else next();
});

export default router;
