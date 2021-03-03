const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types.ObjectId;

/** @description Representacion de un Registro de un Restaurante */
const RegistroSchema = new Schema({
  codigo: { type: String },
  fecha: { type: Date },
  descripcion: { type: String },
  entrada: { type: Number },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
});

module.exports = mongoose.model('Registro', RegistroSchema);
