/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-08-06T17:13:40+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-08-06T19:31:02+08:00
*/

const env = require('./env')
const path = require('path')
const webpack = require('webpack')

const config = {
  output: {},
  // when used with vue, the babel config should be placed here
  // http://vue-loader.vuejs.org/en/features/es2015.html
  babel: {
    presets: [
      ['es2015', {'loose': true, 'modules': 'commonjs'}],
      ['stage-3']
    ],
    cacheDirectory: true,
    plugins: [
      'transform-es3-property-literals',
      'transform-es3-member-expression-literals',
      'add-module-exports',
      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      'transform-runtime'
    ]
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.yaml$/, loader: 'json!yaml'},
      {test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.vue$/, loader: 'vue'},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          // limit for base64 inlining in bytes
          limit: 10000,
          // custom naming format if file is larger than
          // the threshold
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'data': path.join(process.cwd(), 'data'),
      // the main file of vue 2.0 is ok, so no need to redefine
      // 'vuejs': path.join(process.cwd(), 'node_modules/vue/dist/vue.min.js'),
      'regularjs': path.join(process.cwd(), 'node_modules/regularjs/dist/regular'),
      'restate': path.join(process.cwd(), 'node_modules/regular-state/restate-full'),
      'stateman': path.join(process.cwd(), 'node_modules/stateman/stateman')
    },
    extensions: ['', '.js', '.vue', '.json', '.yaml']
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue',
      Regular: 'regularjs',
      restate: 'restate',
      restrap: 'regular-strap',
      _: 'lodash'
    })
  ]
}

const isProduction = env.isProduction()
if (!isProduction) {
  // sourceMap 相关
  config.output.pathinfo = true
  config.devtool = 'eval'
} else {
  config.devtool = '#source-map'
  config.optimizePlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    // in chars (a char is a byte)
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})
  ]
}

module.exports = config
