/* Authentication Routes  */

// Libraries
const express = require('express');

const router = express.Router();
const passport = require('passport');

// Models
const Usuario = require('../models/usuario.js');

// [POST] Sign Up Usuario
router.post('/signup', (req, res) => {
  const usuario = new Usuario(req.body);
  usuario.save().then(() => res.status(201).send())
    .catch((e) => res.status(500).send({ error: e.message }));
});

// [POST] Login Usuario
router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, usuario, info) => {
    if (err) return res.status(501).json(err);
    if (!usuario) return res.status(401).json(info);
    req.logIn(usuario, (err) => {
      if (err) return res.status(501).json(err);
    });
    return res.send(200);
  })(req, res, next);
});

// [GET] Logout Usuario
router.get('/logout', (req, res) => {
  req.logout();
  res.send('');
});
module.exports = router;
