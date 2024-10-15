const mongoose = require('mongoose');
moment = require('moment-timezone');

const donaciones = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    amount: { type: Number, required: true },
    date: { 
        type: Date,
        default: () => moment.tz(Date.now(), 'America/Mexico_City').toDate()
    },
    type: { type: String, enum: ['Tarjeta', 'Efectivo', 'Especie'], default: 'Tarjeta' }
});

module.exports = mongoose.model('donaciones', donaciones);