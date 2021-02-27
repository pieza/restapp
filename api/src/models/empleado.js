const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Empleado de un Restaurante */
const EmpleadoSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  apellidos: { type: String },
  telefono_1: { type: String },
  telefono_2: { type: String },
  puesto: { type: ObjectId, ref: 'Puesto' },
  nacionalidad: { type: ObjectId, ref: 'Pais' },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
