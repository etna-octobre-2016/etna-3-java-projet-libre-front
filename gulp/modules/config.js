module.exports = {
  nodeModules: {
    jade: require("../../config/jade.json"),
    sass: require("../../config/sass.json"),
    svgSprite: require("../../config/svg-sprite.json")
  },
  paths: require("../../config/paths.json"),
  tasks: {
    clean: require("../../config/clean.json")
  }
};
