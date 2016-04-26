# babel-preset-flowio

> A Babel preset for transforming your JavaScript for Flow Commerce.

## Installation

```sh
$ npm install --save-dev babel-preset-flowio
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["flowio"]
}
```

### Via CLI

```sh
$ babel script.js --presets flowio
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["flowio"]
});
```
