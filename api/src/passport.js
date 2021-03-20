const LocalStrategy = require('passport-local').Strategy;
const argon = require('argon2');
const Usuario = require('./models/usuario');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'nickname' }, (nickname, password, done) => {
      // Match Credentials [nickname, password]
      Usuario.findOne({ nickname }).then((usuario) => {
        argon.verify(usuario.password, password).then((isValid) => {
          if (!isValid) return Promise.reject(new Error('Password Invalido'));
          return done(null, usuario);
        })
          .catch((e) => done(null, false, { error: e.message }));
      })
        .catch(() => done(null, false, { error: 'Usuario Invalido' }));
    }),
  );

  passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
  });

  passport.deserializeUser((id, done) => {
    Usuario.findById(id, (err, usuario) => {
      done(err, usuario);
    });
  });
};
