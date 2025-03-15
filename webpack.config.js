const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: [path.join(__dirname, "src")],
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};

const cjsConfig = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.cjs.js',
    library: {
      type: 'commonjs2',
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/index.d.ts',
          to: './index.d.ts',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};

const esmConfig = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [cjsConfig, esmConfig];
