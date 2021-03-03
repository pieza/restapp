const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Comestible de un Restaurante */
const ComestibleSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  descripcion: { type: String },
  cantidad: { type: String },
  marca: { type: ObjectId, ref: 'Marca' },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
  clase: { type: String },
  linea: { type: String },
  precio: { type: Number },
});

module.exports = mongoose.model('Comestible', ComestibleSchema);
