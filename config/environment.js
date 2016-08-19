/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'forum',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
    apiKey: "AIzaSyDFt4TX4nQnAUug5sftLKBt10iAQ_fwbr0",
    authDomain: "qaforum-7a627.firebaseapp.com",
    databaseURL: "https://qaforum-7a627.firebaseio.com",
    storageBucket: "",
  },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
