const mongoose = require('mongoose');

const usuarios = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['administrador', 'lector'], default: 'lector' },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true, unique: true }
});

module.exports = mongoose.model('usuarios', usuarios);