const getters = {
  getCharacters(state) {
    return state.characters;
  },
  getCharacterImages(state) {
    return state.characterImages;
  },
  getCharacterStarships(state) {
    return state.characterStarships;
  },
  getCharactersLoading(state) {
    return state.isCharacterLoading;
  }
};

export default getters;
