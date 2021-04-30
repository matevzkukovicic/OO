//tle sprogramiramo dejanski server v JS, ki ga bomo nato zagnali (za to rabmo node)
//ubistvu je vse za to ze pripravljeno v modulu ("knjiznici") express

//nalozimo module ("knjiznice"), ki jih nasa aplikacija uporablja
  //zunanji moduli
var createError = require('http-errors');
// -> require('http-errors') pomeni, nalozi modul, ki je naveden v package-lock.json pod dependency "http-errors". Ko zalaufas npm install ImeModula --save ti dejansko sam da v package-lock.json vse potrebno glede tega modula.

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./app_server/views/helpers/helpers.js');
//notranji/lokalni moduli
  // - basically js skripte (page-i) , ki jih mi sprogramiramo.
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

//kreiramo server (uporabimo zunanji modul express)
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); //povemo kje so skripte z frontendom
app.set('view engine', 'hbs');                                // povemo dauporabljamo Handlebars

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Dejanska konfiguracija route-anja.
//tuki povemo, kaj naj server nalozi, ko nekdo klice neko stran
//    (base URL (http://localhost:3000))
//    npr: ko bomo sli na http://localhost:3000/users, bomo dobili to, kar smo sprogramiral v './app_server/routes/users' -> note: zgori smo v spremenljivko usersRouter nalozl nas modul

app.use('/', indexRouter);
app.use('/users', usersRouter);


//tle pa sam dolocimo neke funkcije, ki se izvedejo ob napakah and stuff. To je basically vse cist neko osnovno ogrodje, s tem se se ne bomo neki ful ukvarjal
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//dejansko exportanje modula
// tuki je ta dejanska razlika med knjiznicami in node.js moduli - node.js skripte se med seboj razumevajo samo preko modulov! torej vsaka skripta, ki jo napisemo (npr ta) je en modul.
// V tem modulu izpostavimo  public funkcionalnosti/spremenljivke - s tem mislim na funkcionalnosti, ki jih lahko uporablja neka druga skripta, ki bo naložila ta naš modul.
// tle izpostavimo spremenljivko app, ki smo jo prej kreiral in urejal
//npr, ce bi hotl v neki drugi skripti uporabljat app (s tem mislim spremenljivko app), ki smo jo tle skreiral, bo to naredu tko, da bo na simply nalozu (uporabu) nas modul z:
// var APP = require('pot do te datoteke app.js')
// To lahko vidmo v bin/www

module.exports = app;
