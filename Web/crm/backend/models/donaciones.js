const mongoose = require('mongoose');

const donaciones = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: Number, required: true },
    monto: { type: Number, required: true },
    tipo: { type: String, enum: ['Tarjeta', 'Efectivo', 'Especie']},
});

module.exports = mongoose.model('donaciones', donaciones);