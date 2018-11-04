const webpack = require('webpack');

const baseConfig =  {
  mode: 'development',
  node: {
    __dirname: false
  },
  output: {
    publicPath: 'http://localhost:8088/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};

const mainConfig = Object.assign({}, baseConfig, {
  name: 'main',
  target: 'electron-main',
  entry: {
    "js/main/index": "./src/js/main/index.ts"
  }
});

const rendererConfig = Object.assign({}, baseConfig, {
  name: 'renderer',
  target: 'electron-renderer',
  entry: {
    "js/renderer/index": "./src/js/renderer/index.tsx"
  }
});

module.exports = [mainConfig, rendererConfig];