const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Proveedor de un Restaurante */
const ProveedorSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  apellidos: { type: String },
  cedula: { type: String },
  fax: { type: String },
  telefono_oficina: { type: String },
  celular: { type: String },
  correo: { type: String },
  productos: [{ type: ObjectId, ref: 'Producto' }],
  fecha_ingreso: { type: Date },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
  direccion: { type: String },
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
