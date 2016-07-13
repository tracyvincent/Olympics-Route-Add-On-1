var express = require('express');
var index = require('./routes/index');
var athletes = require ('./routes/athletes');
var app = express();
//static files
app.use(express.static('public'));
//routes
app.use('/', index);
app.use('/athletes', athletes);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("server is running on port", port);
});
