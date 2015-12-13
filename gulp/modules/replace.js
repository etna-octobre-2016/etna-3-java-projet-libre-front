/*
 * Module
 */
module.exports = {

  patterns: {

    "development": [
      {
        match: "CACHE_BUST",
        replacement: Date.now()
      },
      {
        match: "ENV",
        replacement: "DEV"
      }
    ],
    "pre-production": [
      {
        match: "CACHE_BUST",
        replacement: Date.now()
      },
      {
        match: "ENV",
        replacement: "PRE-PROD"
      }
    ],
    "production": [
      {
        match: "CACHE_BUST",
        replacement: Date.now()
      },
      {
        match: "ENV",
        replacement: "PRODUCTION"
      }
    ]
  }
};
