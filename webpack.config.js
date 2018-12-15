var path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./dist/"
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          },
        ]
      },
      {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader'
        },
      ],
    }
    ]
  }
};
