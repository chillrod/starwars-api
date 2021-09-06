import apiApp from "@/services/api/apiApp";

const fetchCharactersActions = {
  async handleCharacters({ commit, dispatch }, { page = 1, search = "" }) {
    commit("setCharactersLoading", true);
    try {
      const { data } = await apiApp.get(
        `/people/?page=${page}&search=${search.toLocaleLowerCase()}`
      );

      const { results, count } = data;

      results.forEach(async character => {
        await dispatch("handleStarships", {
          characterName: character.name,
          starships: character.starships
        });

        await dispatch("handleCharactersImages", {
          name: character.name
        });
      });

      commit("setCharacters", { characters: results, search });

      commit("setTotalCharacters", count);

      commit("setCurrentPage", page);
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("setCharactersLoading", false);
    }
  }
};

export default fetchCharactersActions;
