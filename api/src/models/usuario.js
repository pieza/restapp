const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Usuario de un Restaurante */
const UsuarioSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  apellidos: { type: String },
  telefono: { type: String },
  celular: { type: String },
  nickname: { type: String },
  password: { type: String },
  roles: [{ type: ObjectId, ref: 'Rol' }],
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
