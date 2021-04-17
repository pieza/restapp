const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de una Factura de un Restaurante */
const FacturaSchema = new Schema({
  codigo: { type: String },
  fecha: { type: Date },
  monto: { type: Number },
  buffets: [{ type: ObjectId, ref: 'Buffet' }],
  bebidas: [{ type: ObjectId, ref: 'Bebida' }],
  comestibles: [{ type: ObjectId, ref: 'Comestible' }],
  especialidades: [{ type: ObjectId, ref: 'Especialidad' }],
  cliente: { type: ObjectId, ref: 'Cliente' },
});

module.exports = mongoose.model('Factura', FacturaSchema);
