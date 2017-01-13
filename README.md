# babel-preset-flowio

> A Babel preset for transforming your JavaScript for Flow Commerce.

## Installation

```sh
$ npm install --save-dev @flowio/babel-preset-flowio
```

You should also install `babel-runtime` itself:

```sh
$ npm install --save babel-runtime
```

The [`babel-runtime`](https://www.npmjs.com/package/babel-runtime) package must be installed because it's required by the [`babel-plugin-transform-runtime`](https://babeljs.io/docs/plugins/transform-runtime/) package, which is used to externalize references to helpers and builtins. 

In most cases, you should install `babel-plugin-transform-runtime` as a development dependency (with `--save-dev`) and `babel-runtime` as a production dependency (with `--save`).

The transformation plugin is typically used only in development, but the runtime itself will be depended on by your deployed/published code.

By default, automatic code polyfilling is disabled.

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

## License

MIT