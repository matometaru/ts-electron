module.exports = {
  mode: 'development',
  entry: {
    "main/index": "./src/js/main/index.ts"
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }
};
