const mongoose = require('mongoose');

const donaciones = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: Number, required: true },
    monto: { type: Number, required: true },
    tipo: { type: String, required: true },
});

module.exports = mongoose.model('donaciones', donaciones);