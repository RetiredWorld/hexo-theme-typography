const path = require("path")

module.exports = {
  entry: [path.resolve(__dirname, 'raw/js/app.js')],
  output: {
    path: path.resolve(__dirname, 'source/js'),
    filename: "entry.js",
  },
  mode: "production",
}
