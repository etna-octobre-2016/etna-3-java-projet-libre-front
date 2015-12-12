module.exports = {
  common: {
    paths: require("../../config/common/paths.json")
  },
  nodeModules: {
    jade: require("../../config/nodeModules/jade.json"),
    jshint: require("../../config/nodeModules/jshint.json"),
    sass: require("../../config/nodeModules/sass.json"),
    svgSprite: require("../../config/nodeModules/svg-sprite.json")
  },
  tasks: {
    clean: require("../../config/tasks/clean.json")
  }
};
