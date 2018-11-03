const baseConfig =  {
  mode: 'development',
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

const mainConfig = Object.assign({}, baseConfig, {
  entry: {
    "js/main/index": "./src/js/main/index.ts"
  }
});

const rendererConfig = Object.assign({}, baseConfig, {
  entry: {
    "js/renderer/index": "./src/js/renderer/index.tsx"
  }
});

module.exports = [mainConfig, rendererConfig];