/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
const mutations = {
  setCharacters(state, { characters }) {
    const addOnlyNewCharacters = characters.filter(
      filteredCharacters =>
        !state.characters.some(alreadyExists => alreadyExists.url === filteredCharacters.url)
    );

    state.characters.push(...addOnlyNewCharacters);
  },

  setCharacterStarships(state, payload) {
    const [starship, characterName] = payload;

    const relateCharacterToStarship = { starship: starship.name, characterName };

    const checkIfAlreadyExists = state.characterStarships.some(
      characterStarship =>
        characterStarship.starship === relateCharacterToStarship.starship &&
        characterStarship.characterName === relateCharacterToStarship.characterName
    );

    if (!checkIfAlreadyExists) state.characterStarships.push(relateCharacterToStarship);
  },

  setCharactersLoading(state, payload) {
    state.isCharacterLoading = payload;
  },

  setCharacterImages(state, payload) {
    const [image, characterName] = payload;

    const relateCharacterToImage = { image, characterName };

    const checkIfAlreadyExists = state.characterImages.some(
      characterImage =>
        characterImage.image.alt === relateCharacterToImage.image.alt &&
        characterImage.characterName === relateCharacterToImage.characterName
    );

    if (!checkIfAlreadyExists) state.characterImages.push(relateCharacterToImage);
  },

  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },

  setTotalCharacters(state, payload) {
    state.totalCharacters = payload;
  }
};

export default mutations;
