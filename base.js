'use strict';

module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-stage-1')
  ],
  plugins: [
    [require('babel-plugin-transform-runtime'), { polyfill: false, regenerator: false }]
  ]
}
