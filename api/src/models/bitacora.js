const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Bitacora de un Restaurante */
const BitacoraSchema = new Schema({
  codigo: { type: String },
  usuario: { type: ObjectId, ref: 'Usuario' },
  tipo: { type: String },
  descripcion: { type: String },
  detalle: { type: String },
  fecha: { type: Date },
});

module.exports = mongoose.model('Bitacora', BitacoraSchema);
