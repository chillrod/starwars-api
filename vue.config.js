module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "@/shared/styles/_variables.scss"
                `
      }
    }
  }
};
