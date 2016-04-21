/*
 * Module
 */
module.exports = {

  patterns: {

    "common": [
      {
        match: "CACHE_BUST",
        replacement: Date.now()
      }
    ],
    "development": [
      {
        match: "API_BASE_URL",
        replacement: "http://localhost:8080"
      },
      {
        match: "ENV",
        replacement: "DEV"
      }
    ],
    "pre-production": [
      {
        match: "API_BASE_URL",
        replacement: "http://localhost:8080"
      },
      {
        match: "ENV",
        replacement: "PRE-PRODUCTION"
      }
    ],
    "production": [
      {
        match: "API_BASE_URL",
        replacement: "http://localhost:8080"
      },
      {
        match: "ENV",
        replacement: "PRODUCTION"
      }
    ]
  }
};
