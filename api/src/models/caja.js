const mongoose = require('mongoose');
const argon = require('argon2');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Caja de un Restaurante */
const CajaSchema = new Schema({
  codigo: {
    type: String, required: true, trim: true, unique: true,
  },
  fecha: { type: Date, required: true, trim: true },
  descripcion: { type: String, required: true, trim: true },
  entrada: { type: Number, required: true, trim: true },
  apertura: { type: Boolean, required: true, trim: true },
  cierre: { type: Boolean, required: true, trim: true },
  restaurante: {
    type: ObjectId, ref: 'Restaurante', required: true, trim: true,
  },
});

module.exports = mongoose.model('Caja', CajaSchema);
