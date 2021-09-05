const characterDetails = {
  setCharacterDetail({ commit }, payload) {
    commit("setCharacter", payload);
  },

  setCharacterModal({ commit }, payload) {
    commit("showCharacter", payload);
  }
};

export default characterDetails;
