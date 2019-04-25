'use strict';

const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options, dirname) => {
  api.assertVersion('^7.0.0');

  const {
    // Describes the environments you support/target for your project.
    // https://babeljs.io/docs/en/babel-preset-env#targets
    targets,
    // Enable transformation of ES6 module syntax to another module type.
    // Setting this to `false` will not transform modules.
    // https://babeljs.io/docs/en/babel-preset-env#debug
    modules,
    // Outputs the targets/plugins used and the version specified in plugin data 
    // version to console.log
    // https://babeljs.io/docs/en/babel-preset-env#debug
    debug = false,
    // Toggles plugins that aid in development.
    // https://babeljs.io/docs/en/babel-preset-react#development
    development = api.cache.using(() => process.env.NODE_ENV !== 'production'),
    // Whether to remove propTypes.
    removePropTypes = false,
    // Whether to include React presets.
    react = false,
    // Whether to include TypeScript presets.
    typescript = false,
  } = options;

  return {
    presets: [
      [require('@babel/preset-env'), {
        targets,
        debug,
        modules: modules === false ? false : 'auto',
      }],
      react ? [require('@babel/preset-react'), {
        development,
      }] : null,
      typescript ? require('@babel/preset-typescript') : null,
    ].filter(Boolean),
    plugins: [
      [require('@babel/plugin-transform-runtime'), {
        regenerator: false,
      }],
      require('@babel/plugin-proposal-class-properties'),
      [require('@babel/plugin-proposal-object-rest-spread'), {
        useBuiltIns: true,
      }],
      removePropTypes ? [require('babel-plugin-transform-react-remove-prop-types'), Object.assign({
        mode: 'wrap',
        ignoreFilenames: ['node_modules'],
      }, removePropTypes)] : null,
    ].filter(Boolean),
  };
});