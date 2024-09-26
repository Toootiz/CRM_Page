const mongoose = require('mongoose');

const usuarios = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    usuario: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: { type: String, enum: ['administrador', 'lector'], default: 'lector' },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true, unique: true }
});

module.exports = mongoose.model('usuarios', usuarios);