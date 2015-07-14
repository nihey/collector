var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlPlugin = require('./plugins/html-plugin'),
    path = require('path')

module.exports = {
  devtool: 'source-map',

  entry: {
    'script': './scripts/app.jsx',
    'style': './styles/index.less',
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony=true'},
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.js$/, exclude: /(node_modules|bower_components)\//, loader: 'babel-loader'},
      { test: /\.(ttf.*|eot.*|woff.*|ogg|mp3)$/, loader: 'file-loader'},
      { test: /.(png|jpe?g|gif|svg.*)$/, loader: 'file-loader!img-loader?optimizationLevel=7&progressive=true'},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlPlugin('index.html'),
    new webpack.DefinePlugin({
      Config: JSON.stringify({
        FIREBASE_URL: 'https://ektaki-collector.firebaseio.com/',
      }),
    }),
  ],

  resolve: {
    root: __dirname,
    extensions: ['', '.js', 'jsx', '.json'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
