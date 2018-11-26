var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/routing');

var app = express();

//database setup
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://superuser1:superuser1@ds115874.mlab.com:15874/monitoring', {
      useNewUrlParser: true
  }
).then(() => {
  console.log('Database connected!')
}).catch((err) => {
  console.log('Could not connect to the database now. ', err)
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
