var express = require('express');
var path = require('path');
var router = express.Router();
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//var ror = require('./node_modules/node-svm/sample/sample');
// var users = require('./routes/users');
var app = express();  
var fs = require('fs');






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
// app.use('/users', users);

app.get('/server', function(req, res, next) {
  res.render('index', { title: 'Registrosssssssssss de usuario' });
});

app.post('/servidor', function(req,res){
    var status=2;
    var result=req.body.keystrokes;
    var message="todo bien";
    console.log(req.body.fact);
    var title=req.body.fact;
    
    res.redirect('/server');
    
});






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;



app.listen(3000);




// var express= require("express");
// var routes = require('./routes/index');
// var router = express.Router();
// var path = require('path');
// var bodyParser=require("body-parser");
// var app=express();

// var video = require('./node_modules/node-svm/sample/sample');
// app.set('view engine', 'jade');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Registro de usuario' });
// });



// router.post('/servidor', function(req,res){
//     var factDesdeAjax=req.body.fact;
//      console.log(req.body.fact);
//      res.render('index', { title: factDesdeAjax });
// });

// app.listen(3000);
// module.exports = router;