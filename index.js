'use strict';

module.exports = {
  presets: [
    require('babel-preset-react'),
    require('babel-preset-es2015'),
    require('babel-preset-stage-2')
  ],
  plugins: [
    [require('babel-plugin-transform-runtime'), { polyfill: false, regenerator: false }]
  ]
}
