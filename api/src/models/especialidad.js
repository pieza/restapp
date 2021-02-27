const mongoose = require('mongoose');

const { Schema } = mongoose;

/** @description Representacion de un Especialidad de un Restaurante */
const EspecialidadSchema = new Schema({
  codigo: { type: String },
  detalle: { type: String },
  nombre: { type: String },
  precio: { type: Number },
  imagen: { type: String },
});

module.exports = mongoose.model('Especialidad', EspecialidadSchema);
