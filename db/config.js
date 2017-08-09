require('dotenv').config();
var mongoose = require('mongoose');
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoLocation = process.env.MONGO_LOCATION;

console.log(mongoLocation);

var mongoURI = `mongodb://${mongoUsername}:${mongoPassword}@${mongoLocation}`;

mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection open');
});

module.exports = db;
