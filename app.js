var express = require('express');
var logger = require('morgan');

var greetingRouter = require('./routes/greeting');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/greeting', greetingRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;
