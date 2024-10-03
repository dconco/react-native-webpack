const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('../build'),
  },
  module: {
    rules: [{
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["babel-plugin-styled-components"]
          }
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './assets/[name].[ext]' // Define the output path and filename
          }
        }]
      }
    ]
  },
  plugins: [
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'MyApp',
      template: './index.html'
    }),

    new CopyWebpackPlugin({
      patterns: [{
        from: './assets', // Source directory for your images
        to: './assets', // Destination directory in the build output
      }]
    })
  ],
  devServer: {
    static: path.join(__dirname, './index.html'),
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  }
}
