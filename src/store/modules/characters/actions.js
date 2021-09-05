import fetchCharactersActions from "./useCases/fetchCharacters/handle";
import fetchImagesActions from "./useCases/fetchImages/handle";
import fetchStarships from "./useCases/fetchStarships/handle";

const actions = {
  ...fetchCharactersActions,
  ...fetchImagesActions,
  ...fetchStarships
};

export default actions;
