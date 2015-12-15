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
        match: "API_BASE_URL",
        replacement: "http://localhost:3080"
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
        match: "API_BASE_URL",
        replacement: "http://localhost:3080"
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
        match: "API_BASE_URL",
        replacement: "http://localhost:3080"
      },
      {
        match: "ENV",
        replacement: "PRODUCTION"
      }
    ]
  }
};
