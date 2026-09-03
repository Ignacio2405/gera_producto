import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
    razonSocial: {
        type: String,
        required: [true, 'La razon social es obligatoria'],
        trim: true,
        uppercase: true
    },
    cuit:{
        type: String,
        require: [true, 'El CUIT es obligatorio'],
        unique: true,
        match: [/^\d{11}$/, 'El CUIT debe tner exactamente 1 numeros sin guiones']
    },
    contacto: {
        email: {
            type: String,
            require: true,
            lowercase: true
        },
        telefono: String
    },
    categorias:[{
        type: String,
        enum: ['HARDWARE', 'SOFTWARE', 'INSUMOS', 'SERVICIOS']
    }],
    activa: {
        type: Boolean,
        default: true
    }
    
},{
    timestamps: true
});

export const Proveedor = mongoose.model('Proveedor', proveedorSchema);