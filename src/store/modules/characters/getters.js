const getters = {
  getCharacters(state) {
    return state.characters;
  },
  getCharactersLoading(state) {
    return state.isCharacterLoading;
  }
};

export default getters;
