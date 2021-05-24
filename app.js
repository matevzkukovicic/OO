var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_server/views/helpers/hbsh.js');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

var hbs = require('hbs')
hbs.registerHelper('ifeq', function(arg1, arg2) {
  if(arg1 === arg2)
    return "#BCBCBC"
  else
    return "#FFFFFF"
});
hbs.registerHelper('ifin', function(arg1, arg2) {
  console.log(arg1)
  console.log(arg2)
  if(arg2.includes(arg1))
    return "prehodna_"
  else
    return "nePrehodna_"
});


// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); //povemo kje so skripte z frontendom
app.set('view engine', 'hbs');                                // povemo dauporabljamo Handlebars

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
