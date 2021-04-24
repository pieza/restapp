/* Authentication Routes  */

// Libraries
const express = require('express');

const router = express.Router();
const passport = require('passport');

const UsuarioService = require('../services/usuario.service')

// Models
const Usuario = require('../models/usuario.js');

// [POST] Sign Up Usuario
router.post('/signup', async (req, res) => {
  const service = new UsuarioService()
  const usuario = await service.create(req.body)
    .catch((e) => res.status(500).send({ error: e.message }));
  return res.status(201).send()
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

router.get("/current", async (req, res) => {
  if(!req.user) return res.json(null)
  const user = await Usuario.findById(req.user._id).populate({
    path: 'empleado',
    populate: {
      path: 'restaurante'
    }
  }).populate('roles')
  return res.json(user)
});

module.exports = router;
