import apiApp from "@/services/api/apiApp";

const fetchCharactersActions = {
  async handleCharacters({ commit }, { page = 1, search = "" }) {
    commit("setCharactersLoading", true);
    try {
      const { data } = await apiApp.get(
        `/people/?page=${page}&search=${search.toLocaleLowerCase()}`
      );

      const { results } = data;

      commit("setCharacters", { characters: results, search });
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("setCharactersLoading", false);
    }
  }
};

export default fetchCharactersActions;
