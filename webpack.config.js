const webpack = require('webpack');
const path = require('path');

const baseConfig =  {
  mode: 'development',
  node: {
    __dirname: false
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              'react-hot-loader/babel',
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8088,
    contentBase: 'dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};

const mainConfig = Object.assign({}, baseConfig, {
  name: 'main',
  // target: 'electron-main',
  entry: {
    "js/main/index": "./src/js/main/index.ts"
  }
});

const rendererConfig = Object.assign({}, baseConfig, {
  name: 'renderer',
  // target: 'electron-renderer',
  entry: {
    "js/renderer/index": "./src/js/renderer/index.tsx"
  }
});

module.exports = [rendererConfig];