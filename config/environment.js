'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'crates-status',
    environment: environment,
    // copied from https://github.com/glimmerjs/glimmer-application-pipeline/blob/master/lib/broccoli/default-module-configuration.ts
    moduleConfiguration: {
      types: {
        application: { definitiveCollection: 'main' },
        component: { definitiveCollection: 'components' },
        helper: { definitiveCollection: 'components' },
        renderer: { definitiveCollection: 'main' },
        template: { definitiveCollection: 'components' }
      },
      collections: {
        main: {
          types: ['application', 'renderer']
        },
        store: {
          unresolvable: true
        },
        components: {
          group: 'ui',
          types: ['component', 'template', 'helper'],
          defaultType: 'component',
          privateCollections: ['utils']
        },
        styles: {
          group: 'ui',
          unresolvable: true
        },
        utils: {
          unresolvable: true
        }
      }
    }
  };

  return ENV;
};
