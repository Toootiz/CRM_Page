const mongoose = require('mongoose');

const usuarios = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Administrador', 'Lector'], default: 'Lector' },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true }
});

module.exports = mongoose.model('usuarios', usuarios);