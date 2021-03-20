const mongoose = require('mongoose');
const argon = require('argon2');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Usuario de un Restaurante */
const UsuarioSchema = new Schema({
  codigo: {
    type: String, required: true, trim: true, unique: true,
  },
  nombre: { type: String, required: true, trim: true },
  apellidos: { type: String, required: true, trim: true },
  telefono: { type: String, required: true, trim: true },
  celular: { type: String, required: true, trim: true },
  nickname: {
    type: String, required: true, trim: true, unique: true,
  },
  password: { type: String, required: true, trim: true },
  roles: [{ type: ObjectId, ref: 'Rol', default: [] }],
});

/** to JSON parser  */
UsuarioSchema.methods.toJSON = function () {
  const usuario = this;
  const usuarioObject = usuario.toObject();
  delete usuarioObject.password;
  delete usuarioObject.tokens;
  return usuarioObject;
};

UsuarioSchema.statics.findByCredentials = async (nickname, password) => {
  // Asynchronous nickname search
  const usuario = await UsuarioSchema.findOne({ nickname });
  if (!usuario) throw new Error('Unable to login.');
  const isMatch = await argon.verify(password, usuario.password);
  if (!isMatch) throw new Error('Unable to login.');

  return usuario;
};
// Hash the plain text password before saving (Hashear credenciales)

UsuarioSchema.pre('save', async function (next) {
  const usuario = this;
  if (usuario.isModified('password')) usuario.password = await argon.hash(usuario.password);
});
module.exports = mongoose.model('Usuario', UsuarioSchema);
