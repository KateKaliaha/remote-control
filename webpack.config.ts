import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets=es2015',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/public/icons/[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets=es2015'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },
  externals: [nodeExternals()],
  target: 'node',
};
