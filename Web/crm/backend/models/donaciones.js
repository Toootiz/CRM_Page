const mongoose = require('mongoose');

const donaciones = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    type: { type: String, enum: ['Tarjeta', 'Efectivo', 'Especie'], required: true }
});

module.exports = mongoose.model('donaciones', donaciones);