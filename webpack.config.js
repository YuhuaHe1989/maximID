// var bootstrapPath_css = __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// var bootstrapPath_js = __dirname + '/node_modules/bootstrap/dist/js';
// var bootstrapSocialPath = __dirname + '/node_modules/bootstrap-social';
// var fontAwesomePath = __dirname + '/node_modules/font-awesome/css';

var path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/'
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
  },

  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.css'],
  //   modulesDirectories: ['node_modules', bootstrapPath_css, jqueryPath, bootstrapSocialPath, fontAwesomePath]
  // }
}