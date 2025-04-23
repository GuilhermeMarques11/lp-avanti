const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '.'), // Altere para 'dist' se os arquivos HTML estão lá
    },
    open: true,
    hot: true,
    port: 3000,
  },
};
