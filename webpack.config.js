const path = require('path');

module.exports = {
  entry: {
    friends: "./friends.js",
    popup: "./popup.js"
  },
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "[name].js"
  },
  devtool: 'inline-source-map',
};