# @flowio/babel-preset-flowio

> A Babel preset for transforming your JavaScript for Flow Commerce.

The following stage 4 syntax is excluded:

 - generators: `regenerator-runtime` is too heavyweight for our use.

 - `async/await`: `regenerator-runtime` is too heavyweight for our use, and [async-to-promises](https://www.npmjs.com/package/babel-plugin-async-to-promises) is not yet complete enough to be safely used.

 - async iterators: depends on both generators and `async` functions
 
## Installation

```sh
$ npm install --save-dev @flowio/babel-preset-flowio
```

You must also install [`@babel/runtime`](https://babeljs.io/docs/en/babel-runtime) as a production dependency:

```sh
$ npm install --save @babel/runtime
```

This preset includes the [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime), which is used to externalize references to helpers and builtins by importing them from the `@babel/runtime` module.


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@flowio/babel-preset-flowio"]
}
```

### Via CLI

```sh
$ babel script.js --presets flowio
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["@flowio/babel-preset-flowio"]
});
```

## JavaScript

This preset includes [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) to target specific environments. 

You may use the [`target`](https://babeljs.io/docs/en/babel-preset-env#targets) option to describe the environments you support for your project. 

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "targets": "> 0.25%, not dead"
    }]
  ]
}
```

> You may also leverage the [Browserlist integration](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration) instead.

You may use the [`modules`](https://babeljs.io/docs/en/babel-preset-env#modules) option to enable transformation of ES6 module syntax to another module type.

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "modules": false
    }]
  ]
}
```

You may use the [`debug`](https://babeljs.io/docs/en/babel-preset-env#debug) option to print configuration details to `console.log`.

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "debug": true
    }]
  ]
}
```

## React

This preset can be configured to include [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react). To enable this transformation, set the `react` option to `true`:

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "react": true
    }]
  ]
}
```

### Development Mode

When `process.env.NODE_ENV` is _not_ `'production'`, the [development mode](https://babeljs.io/docs/en/babel-preset-react#development) will be set for `@babel/preset-react`.

You may override our default development option by providing your own.

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "development": false
    }]
  ]
}
```

### PropTypes Removal

This preset can also be configured to remove propTypes using [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) with the following default options:

To enable this transformation with the default options, set the `removePropTypes` option to `true`:

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "removePropTypes": true
    }]
  ]
}
```

The default options that will be used are:

```json
{
  "mode": "wrap",
  "ignoreFilenames": ["node_modules"]
}
```

Default options can be overridden using the `removePropTypes` option. These options will be shallow-merged with the defaults:

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "removePropTypes": {
        "mode": "remove"
      }
    }]
  ]
}
```

For example, you might want to use the remove mode for your production build and disable this transform entirely in development for optimal build speeds.

## TypeScript

This preset can be configured to include [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript). To enable this transformation, set the `typescript` option to `true`:

```json
{
  "presets": [
    ["@flowio/babel-preset-flowio", {
      "typescript": true
    }]
  ]
}
```

## License

MIT