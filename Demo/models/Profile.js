var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
    name: String,
    Location: String,
    Email: String,
    PhoneNumber: String
    //Birthdate: { type: Date, default: Date.now },
  });

  var Profile = mongoose.model("Profile", ProfileSchema);
  module.exports = Profile;