const mutations = {
  setCharacters(state, payload) {
    state.characters = payload;
  },
  setCharactersLoading(state, payload) {
    state.isCharacterLoading = payload;
  }
};

export default mutations;
