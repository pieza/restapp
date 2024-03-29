const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const authroute = require('./routes/auth.route.local');

const app = express();
const handleError = require('./utils/error-handler');

// server settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors({credentials: true, origin:true}));
app.use(morgan('dev'));
app.use(express.json());
// Express Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 7200000,
      httpOnly: false,
      secure: false,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// error handle
app.use(handleError);

// static wipe
app.use(express.static(path.join(__dirname, '..', 'public')));

// default Route
app.use('*', (req, res, next) => {
  if (!req.originalUrl.includes(process.env.API_PATH)) res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  else next();
});

// routes
const normalizedPath = path.join(__dirname, 'routes');
// auto register all routes in /routes folder
fs.readdirSync(normalizedPath).forEach((file) => {
  if (!file.match(/^(.*)\.route\.js$/)) return;
  const Route = require(`./routes/${file}`);
  app.use(`${process.env.API_PATH}`, new Route().router);
});

// auth route & Passport
app.use(`${process.env.API_PATH}`, authroute);
require('./passport')(passport);

module.exports = app;
