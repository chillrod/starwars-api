/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
const mutations = {
  setCharacters(state, { characters }) {
    state.characters.push(...characters);
  },

  setCharacter(state, payload) {
    state.character = payload;
  },

  showCharacter(state, payload) {
    state.showCharacter = payload;
  },

  setCharacterStarships(state, payload) {
    const [starship, characterName] = payload;

    const relateCharacterToStarship = { starship: starship.name, characterName };

    state.characterStarships.push(relateCharacterToStarship);
  },

  setCharactersLoading(state, payload) {
    state.isCharacterLoading = payload;
  },

  setCharacterImages(state, payload) {
    const [image, characterName] = payload;

    const relateCharacterToImage = { image, characterName };

    state.characterImages.push(relateCharacterToImage);
  },

  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },

  setTotalCharacters(state, payload) {
    state.totalCharacters = payload;
  }
};

export default mutations;
