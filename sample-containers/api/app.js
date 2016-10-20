var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
