import { createToast } from "mosha-vue-toastify";

import apiApp from "@/services/api/axios";

const actions = {
  async handleCharacters({ commit }, payload) {
    commit("setCharactersLoading", true);
    try {
      const { data } = await apiApp.get(`/people/?page=${payload}`);

      const { results } = data;

      commit("setCharacters", results);
    } catch {
      createToast("I'm sorry 😥, we failed to fetch data from Star Wars Characters", {
        hideProgressBar: true,
        type: "danger",
        position: "top-center"
      });
    } finally {
      commit("setCharactersLoading", false);
    }
  }
};

export default actions;
