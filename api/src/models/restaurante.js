const mongoose = require('mongoose');

const { Schema } = mongoose;

/** @description Representacion de un Restaurante de un Restaurante */
const RestauranteSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  direccion: { type: String },
  aforo: { type: Number },
  especialidad: { type: String },
  telefono: { type: Number },
  activo: { type: Boolean, default: true },
});

module.exports = mongoose.model('Restaurante', RestauranteSchema);
