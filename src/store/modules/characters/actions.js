import fetchCharactersActions from "./useCases/fetchCharacters/handle";
import fetchImagesActions from "./useCases/fetchImages/handle";
import fetchStarships from "./useCases/fetchStarships/handle";
import changePage from "./useCases/changePage/handle";

const actions = {
  ...fetchCharactersActions,
  ...fetchImagesActions,
  ...fetchStarships,
  ...changePage
};

export default actions;
