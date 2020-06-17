module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/css/_global.scss";
        `
      }
    }
  }
};