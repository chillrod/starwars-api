/* eslint-disable implicit-arrow-linebreak */
import axios from "axios";
import { serpApiKey } from "@/services/api/serpApi";

const searchParams = querySearch =>
  `?&tbm=isch&engine=google&q=${querySearch}&api_key=${serpApiKey}`;

const fetchImagesActions = {
  async handleCharactersImages({ commit }, payload) {
    commit("setCharactersLoading", true);

    const parseWhiteSpace = payload.replace(" ", "%20");
    try {
      const { data } = await axios.get(
        `https://serpapi.com/search.json${searchParams(parseWhiteSpace)}`
      );

      const getFirstImage = data.image_results[0];

      const { original } = getFirstImage;

      commit("setCharacterImages", { name: payload, src: original });
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("setCharactersLoading", false);
    }
  }
};

export default fetchImagesActions;
