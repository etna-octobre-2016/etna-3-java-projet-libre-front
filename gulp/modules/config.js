module.exports = {
  modules: {
    clean: require("../../config/clean.json")
  },
  nodeModules: {
    jade: require("../../config/jade.json"),
    sass: require("../../config/sass.json"),
    svgSprite: require("../../config/svg-sprite.json")
  },
  paths: require("../../config/paths.json"),
};
