module.exports = {
  mode: 'development',
  entry: {
    "js/main/index": "./src/js/main/index.ts",
    "js/renderer/index": "./src/js/renderer/index.tsx"
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
