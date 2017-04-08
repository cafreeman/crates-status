'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const MergeTrees = require('broccoli-merge-trees');
const Concat = require('broccoli-concat');

module.exports = function(defaults) {
  const app = new GlimmerApp(defaults, {
    // Add options here
  });

  const styles = Concat('node_modules', {
    inputFiles: ['bulma/css/bulma.css'],
    outputFile: 'app.css'
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return new MergeTrees([
    app.toTree(),
    styles
  ], { overwrite: true});
};
