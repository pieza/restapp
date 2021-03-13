/* Authentication Routes  */

// Libraries
const express = require('express');

const router = express.Router();
const passport = require('passport');

// Models
const Usuario = require('../models/usuario.js');

// [POST] Sign Up Usuario
router.post('/signup', (req, res) => {
  new Usuario(req.body).save().then(res.status(201).send).catch((e) => res.status(400).send(e));
});

// [POST] Login Usuario
router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, usuario, info) => {
    if (err) return res.status(501).json(err);
    if (!usuario) return res.status(501).json(info);
    req.logIn(usuario, (err) => { if (err) return res.status(501).json(err); });
    return res.status(200).json(usuario);
  })(req, res, next);
});

module.exports = router;
