const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types.ObjectId;
const { Schema } = mongoose;

/** @description Representacion de Puesto de Empleado */
const PuestoSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  tipo: { type: String },
  rol: { type: { type: ObjectId, ref: 'Rol' } },
});

module.exports = mongoose.model('Puesto', PuestoSchema);
