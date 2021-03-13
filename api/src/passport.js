const LocalStrategy = require('passport-local').Strategy;
const argon = require('argon2');
const Usuario = require('./src/models/usuario');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ user_field: 'nickname' }, (nickname, password, done) => {
      // Match Credentials [nickname, password]
      Usuario.findOne({ nickname })
        .then((usuario) => {
          argon.verify(password, usuario.password).then(() => done(null, usuario)).catch(() => done(null, false, { message: 'Password Invalido' }));
        })
        .catch(() => done(null, false, { message: 'Usuario Invalido' }));
    }),
  );

  passport.serializeUsuario((usuario, done) => {
    done(null, usuario.id);
  });

  passport.deserializeUsuario((id, done) => {
    Usuario.findById(id, (err, usuario) => {
      done(err, usuario);
    });
  });
};
