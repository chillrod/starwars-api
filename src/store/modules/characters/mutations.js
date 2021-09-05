/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
const mutations = {
  setCharacters(state, { characters }) {
    // terminar
    const checkIfAlreadyExists = characters.filter(
      filteredCharacters =>
        !state.characters.some(alreadyExists => alreadyExists.url === filteredCharacters.url)
    );

    state.characters.push(...checkIfAlreadyExists);
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
  }
};

export default mutations;
