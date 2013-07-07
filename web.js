var fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var output = fs.readFile('index.html').toString();
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
