var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    thumbnail: String,
    screenshot: String,
    title: String,
    description: String,
    company: String,
    url: String
  });

  var Project = mongoose.model("Project", ProjectSchema);
  module.exports = Project;
