const path = require('path') // node js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode
  mode: 'development', // production
  // entry
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    about: path.resolve(__dirname, './src/about.js'),
  },
  // output
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // title
      title: 'Home',
      // filename
      filename: 'index.html',
      // template
      template: './src/temp.index.html',
      // chunks
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      // title
      title: 'About',
      // filename
      filename: 'about.html',
      // template
      template: './src/temp.about.html',
      // chunks
      chunks: ['about'],
    }),
  ],
  // loaders
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
}
