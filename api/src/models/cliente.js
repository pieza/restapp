const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Cliente de un Restaurante */
const ClienteSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  fecha_llegada: { type: Date },
  reservacion: {type: Boolean, default: false},
  restaurante: { type: ObjectId, ref: 'Restaurante' },
  mesa: { type: ObjectId, ref: 'Mesa' },
  barra: { type: Boolean, default: false },
});

module.exports = mongoose.model('Cliente', ClienteSchema);
