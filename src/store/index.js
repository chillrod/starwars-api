import { createStore } from "vuex";

import characters from "./modules/characters";

const store = createStore({
  modules: {
    characters
  }
});

export default store;
