import apiApp from "@/services/api/apiApp";

const actions = {
  async handleStarships({ commit }, payload) {
    try {
      const { starships, characterName } = payload;
      starships.forEach(async characterStarships => {
        const getParsedQueryString = characterStarships.replace(
          "https://swapi.dev/api/starships/",
          ""
        );

        const { data } = await apiApp.get(`/starships/${getParsedQueryString.replaceAll("/", "")}`);
        commit("setCharacterStarships", [data, characterName]);
      });
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("setCharactersLoading", false);
    }
  }
};

export default actions;
