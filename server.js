var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
  // res.send('heyo');
});

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});
