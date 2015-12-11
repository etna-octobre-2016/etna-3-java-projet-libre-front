var yargs = require("yargs");

// adds usage
yargs = yargs
    .locale("en")
    .usage("Usage: $0 <command> [options]")
    .command("build", "Builds distributable project in the dist/ directory.")
    .command("clean", "Removes dist/ and tmp/ directories")
    .command("dev", "Launches development environment.")
    .demand(1)
    .help("h")
    .alias("h", "help")
    .describe("mode", "Sets task mode. Available values:\n- development\n- distributable")
    .describe("optimize", "Optimizes output")
    .nargs("mode", 1);

// sets default values
yargs = yargs
    .default("mode", "development")
    .default("optimize", false);

// exports command args
module.exports = yargs.argv;
