module.exports = {
  entry: "./main.js",
  output: {
    path: "./",
    filename: "index.js"
  },
  module: {
    loaders: [
      {	
      	exclude: /node_modules/,
        loader: "babel",
        test: /\.js$/,
        query: {
        	presets: ['es2015','react']
        }
      },
      {
        loaders: ["style-loader","css-loader","sass-loader"],
        test: /\.scss$/
      }
    ]
  }
}
