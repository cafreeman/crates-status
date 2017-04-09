'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

class CustomApp extends GlimmerApp {
  cssTree() {
    const cssTree = super.cssTree();

    const styles = new Funnel('node_modules', {
      files: ['bulma/css/bulma.css']
    });

    return new MergeTrees([cssTree, styles]);
  }
}

module.exports = function(defaults) {
  const app = new CustomApp(defaults);

  return app.toTree();
}
