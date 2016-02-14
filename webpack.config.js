module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}