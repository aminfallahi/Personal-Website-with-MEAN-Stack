var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var Profiles = require('./routes/Profile');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const dburl = 'mongodb+srv://CSE775:775@cluster0-u4bmz.mongodb.net/test?retryWrites=true';
mongoose.connect('mongodb+srv://CSE775:775@cluster0-u4bmz.mongodb.net/test?retryWrites=true', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist/Demo/')));
app.use('/Profiles', express.static(path.join(__dirname, 'dist/Demo')));
app.use('/Profile', Profiles);

//app.use('/books', express.static(path.join(__dirname, 'dist')));
//app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;