[React_Url]: https://facebook.github.io/react/docs/getting-started.html
[ES6_Url]: http://exploringjs.com/es6/
[Webpack_Url]: http://webpack.github.io/docs/
[Babel_Url]: https://github.com/babel/babel
# React Initial Project With Minify SCSS to one CSS File
This is a template project of [React][React_Url] + [ES6][ES6_Url] + [Webpack][Webpack_Url] to demonstrate how to use scss(or other compile-to-css language) in webpack projects, created at 01/11/2016.

## Start Project
```bash
$ npm install
$ npm run build
$ npm run start
```

# Prerequisite
 - css-loader
 - node-sass
 - sass-loader
 - style-loader
 - extract-text-webpack-plugin

```bash
$ npm install css-loader node-sass sass-loader style-loader extract-text-webpack-plugin --save-dev
```

# Tips
## webpack won't pick up your styles until you add require("PATH_TO_STYLESHEET") to your module (JS file)
Please do not forget add require stylesheet in your moulde js file, in my project is:

```javascript
// client.js
import React from 'react';
import ReactDOM from 'react-dom';
//import ...
require('../scss/main.scss');
```

## loader could add query parameters like url
In this template project, I want minify all css to one file, add `?minimize` to css-loader will help:

```javascript
// webpack.config.js
{
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', css-loader?minimize)
}
```

More than one query parameters, use "&" as conjunction like HTTP `GET` method.