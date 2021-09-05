/* eslint-disable implicit-arrow-linebreak */
import axios from "axios";

const fetchImagesActions = {
  async handleCharactersImages({ commit }, { name }) {
    commit("setCharactersLoading", true);

    const parsedCharacterName = name.toLocaleLowerCase().replace(" ", "%20");

    try {
      const { data } = await axios.post(`https://starwars-image.herokuapp.com/`, {
        name: parsedCharacterName
      });

      const { image, alt } = data;

      commit("setCharacterImages", [{ image, alt }, name]);
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("setCharactersLoading", false);
    }
  }
};

export default fetchImagesActions;
