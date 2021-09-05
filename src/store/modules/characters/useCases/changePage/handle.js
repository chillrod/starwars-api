const changePage = {
  async handlePageChange({ commit }, payload) {
    commit("setCurrentPage", payload);
  }
};

export default changePage;
