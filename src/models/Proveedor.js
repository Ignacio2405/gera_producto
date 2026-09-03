import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
  razonSocial: {
    type: String,
    required: [true, 'La razón social es obligatoria'],
    trim: true,
    uppercase: true
  },
  cuit: {
    type: String,
    required: [true, 'El CUIT es obligatorio'],
    unique: true,
    match: [/^\d{11}$/, 'El CUIT debe tener exactamente 11 números sin guiones']
  },
  contacto: {
    email: {
      type: String,
      required: [true, 'El email de contacto es obligatorio'],
      lowercase: true
    },
    telefono: {
      type: String
    }
  },
  direccion: {
    calle: {
      type: String,
      required: [true, 'La calle es obligatoria']
    },
    ciudad: {
      type: String,
      required: [true, 'La ciudad es obligatoria']
    },
    pais: {
      type: String,
      default: 'Argentina'
    }
  },
  calificacion: {
    type: Number,
    required: [true, 'La calificación es obligatoria'],
    min: [1, 'La calificación mínima es 1'],
    max: [5, 'La calificación máxima es 5'],
    default: 3
  },
  estadoActivo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export const Proveedor = mongoose.model('Proveedor', proveedorSchema);