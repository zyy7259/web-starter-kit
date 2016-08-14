<!--
@Author: Yingya Zhang <zyy>
@Date:   2016-06-25 21:25:00
@Email:  zyy7259@gmail.com
@Last modified by:   zyy
@Last modified time: 2016-08-07T00:24:51+08:00
-->

# es5 -> es6

- module.exports/require -> import/export
- self/that -> () => {}
- var -> let/const
- object-shorthand
  - key: key -> key
  - a: function() {} -> a() {}

# install the followings locally which can not be installed globally

```javascript
npm i watch rimraf fs-extra eslint-config-zorojs --save-dev
npm i webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-stage-3 --save-dev
npm install html-loader json-loader raw-loader yaml-loader style-loader css-loader postcss-loader --save-dev
npm install postcss-cli postcss precss postcss-calc autoprefixer postcss-sprites --save-dev
// http://stackoverflow.com/questions/33512715/babel-6-0-20-modules-feature-not-work-in-ie8
// https://www.npmjs.com/package/babel-plugin-add-module-exports
npm install babel-plugin-transform-es3-member-expression-literals babel-plugin-transform-es3-property-literals babel-plugin-add-module-exports --save-dev
```

# install the followings devDependencies globally or locally

```
npm install regular-state regularjs stateman -g
npm install lodash -g
npm install once -g
npm install url -g
npm install xhr -g
```

# problems

https://github.com/eslint/eslint/issues/6274#issuecomment-228420692

# koa

npm i -g koa@next koa-compose@next koa-convert koa-mount@next koa-router@next koa-send koa-session koa-static@next koa-bodyparser@next
