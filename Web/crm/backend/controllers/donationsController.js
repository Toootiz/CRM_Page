const Donaciones = require('../models/donaciones');

exports.getAllDonaciones = async (req, res) => {
    try {
        const donaciones = await Donaciones.find();
        const donacionesConId = donaciones.map(donaciones => ({
            id: donaciones._id,
            name: donaciones.name,
            email: donaciones.email,
            phone: donaciones.phone,
            amount: donaciones.amount,
            date: donaciones.date,
            type: donaciones.type
        }));
        res.set('X-Total-Count', donaciones.length);
        res.json(donacionesConId);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las donaciones' });
    }
};
// Obtener un post por ID
exports.getDonacionById = async (req, res) => {
    try {
        const donacion = await Donaciones.findById(req.params.id);
        if (donacion) {
            res.json({
                id: donacion._id,
                name: donacion.name,
                email: donacion.email,
                phone: donacion.phone,
                amount: donacion.amount,
                date: donacion.date,
                type: donacion.type
            });
        } else {
            res.status(404).json({ error: 'Donacion no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la donacion' });
    }
};

// Crear un nuevo post
exports.createDonacion = async (req, res) => {
    try {
        const nuevaDonacion = new Donaciones({
            id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type
        });

        const donacionGuardada = await nuevaDonacion.save();
        res.status(201).json({
            id: donacionGuardada._id,
            name: donacionGuardada.name,
            email: donacionGuardada.email,
            phone: donacionGuardada.phone,
            amount: donacionGuardada.amount,
            date: donacionGuardada.date,
            type: donacionGuardada.type
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear la donacion', details: err });
    }
};
// Actualizar un post por ID
exports.updateDonacion = async (req, res) => {
    try {
        const updatedDonacion = await Donaciones.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type
        }, { new: true });
        if (updatedDonacion) {
            res.json({
                id: updatedDonacion._id,
                name: updatedDonacion.name,
                email: updatedDonacion.email,
                phone: updatedDonacion.phone,
                amount: updatedDonacion.amount,
                date: updatedDonacion.date,
                type: updatedDonacion.type
            });
        } else {
            res.status(404).json({ error: 'Donacion no encontrada' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar la donacion', details: err });
    }
};
// Eliminar un post por ID
exports.deleteDonacion = async (req, res) => {
    try {
        const deletedDonacion = await Donaciones.findByIdAndDelete(req.params.id);
        if (deletedDonacion) {
            res.json({ id: deletedDonacion._id });
        } else {
            res.status(404).json({ error: 'Donacion no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la donacion' });
    }
};