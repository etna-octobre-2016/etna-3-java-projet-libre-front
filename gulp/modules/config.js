// TODO: separate npm dependencies config from tasks config

module.exports = {
  clean: require("../../config/clean.json"),
  jade: require("../../config/jade.json"),
  paths: require("../../config/paths.json"),
  sass: require("../../config/sass.json"),
  svgSprite: require("../../config/svg-sprite.json")
};
