import fetchCharactersActions from "./useCases/fetchCharacters/handle";
import fetchImagesActions from "./useCases/fetchImages/handle";
import fetchStarships from "./useCases/fetchStarships/handle";
import changePage from "./useCases/changePage/handle";
import characterDetails from "./useCases/characterDetails/handle";

const actions = {
  ...fetchCharactersActions,
  ...fetchImagesActions,
  ...fetchStarships,
  ...changePage,
  ...characterDetails
};

export default actions;
