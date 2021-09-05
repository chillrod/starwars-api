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
    console.log("🚀 ~ file: mutations.js ~ line 29 ~ setCharacterImages ~ payload", payload);
    const { image, alt } = payload;

    const addImagesToRelatedCharacters = state.characters.forEach(character => {
      const pushImages = { ...character, characterImg: { image, alt } };

      console.log(
        "🚀 ~ file: mutations.js ~ line 34 ~ setCharacterImages ~ pushImages",
        pushImages
      );
      return pushImages;
    });

    return addImagesToRelatedCharacters;
  }
};

export default mutations;
