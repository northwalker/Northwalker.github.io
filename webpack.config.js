const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const config = {
  devtool: isProduction ? '#source-map' : '#cheap-module-eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    hotOnly: true,
    // historyApiFallback: true, // 404s will fallback to...
    overlay: true,
    noInfo: true,
  },
  performance: {
    hints: false
  },
  entry: {
    googleMapApi: path.join(__dirname, './src/js/lib/googleMapApi.js'),
    particles: path.join(__dirname, './src/js/lib/particles.js'),
    app: path.join(__dirname, './src/js/app.js')
  },
  output: {
    path: path.join(__dirname, './docs'),
    publicPath: '',
    filename: isProduction
      ? 'assets/js/[name].[chunkhash:7].js'
      : '[name].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.(js)$/, // test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: path.join(__dirname, './src/'),
      //   exclude: path.join(__dirname, './node_modules/')
      // },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isProduction
            ? 'assets/font/[name].[hash:7].[ext]'
            : '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isProduction
            ? 'assets/img/[name].[hash:7].[ext]'
            : '[name].[hash:7].[ext]'
        }
      },
      // {
      //   test: /\.json$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: isProduction
      //     ? 'assets/json/[name].[ext]'
      //     : '[name].[ext]'
      //   }
      // }
    ]
  },
  /* resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }, */
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
      chunksSortMode: function (entry1, entry2) {
        return 1; // <-- your fancy array sort method goes here :)
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}

if (isProduction) {
  config.plugins = config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      inlineSource: '.js$',
      inject: 'head',
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        // minifyJS: true,
        // minifyCSS: true,
        minifyURLs: true,
        hash: true
      },
      chunksSortMode: function (entry1, entry2) {
        return 1; // <-- your fancy array sort method goes here :)
      }
    }),
    new HtmlWebpackInlineSourcePlugin()
  )
}

module.exports = config;
