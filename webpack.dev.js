const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader'],
      },
    ],
  },
});
