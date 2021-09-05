const getters = {
  getCharacters(state) {
    return state.characters;
  },

  getCharacter(state) {
    return state.character;
  },

  getShowCharacter(state) {
    return state.showCharacter;
  },

  getCharacterImages(state) {
    return state.characterImages;
  },

  getCharacterStarships(state) {
    return state.characterStarships;
  },

  getCharactersLoading(state) {
    return state.isCharacterLoading;
  },

  getCurrentPage(state) {
    return state.currentPage;
  },

  getTotalCharacters(state) {
    return state.totalCharacters;
  }
};

export default getters;
