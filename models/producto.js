import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
    trim: true
  },
  codigoSku: {
    type: String,
    required: [true, 'El código SKU es obligatorio'],
    unique: true,
    uppercase: true,
    trim: true,
    match: [/^[A-Z]{3}-[0-9]{3}$/, 'El código SKU debe tener el formato ABC-123']
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'El stock no puede ser negativo']
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es obligatoria'],
    enum: {
      values: ['HARDWARE', 'SOFTWARE', 'INSUMOS', 'SERVICIOS', 'PERIFERICOS', 'MONITORES'],
      message: '{VALUE} no es una categoría válida'
    }
  },
  proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proveedor',
    required: [true, 'El proveedor es obligatorio']
  },
  activo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export const Producto = mongoose.model('Producto', productoSchema);