const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();



const usersRouter = require('./routes/users');
const indexRouter = require("./routes/index");

const debug = require('debug')('school-running-application:server');
const http = require('http');
const { constants } = require('buffer');

/**
 * Get port from environment and store in Express.
 */

const PORT = (process.env.PORT || '5001');
app.set('', PORT);
app.listen(PORT, (error) =>{
    if (!error)
    console.log('Server is successfully Running, and App is listening on port' + ' ' + PORT)

    else 

    console.log('error occured, server cannot start', error);
    
});


/**
 * Create HTTP server.
 */

var server = http.createServer(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://oemekaezeogo:znZJFIKl2mp5eOVT@cluster0.hnf2oxv.mongodb.net/?retryWrites=true&w=majority',{ user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log('conneceted to database'));




app.use('/', usersRouter);
// app.use('/users/cool/', usersRouter);
// app.use("/catalog", catalogRouter);

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

module.exports = app;


