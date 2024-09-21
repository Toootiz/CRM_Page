const Donaciones = require('../models/donaciones');

exports.getAllDonaciones = async (req, res) => {
    try {
        const donaciones = await Donaciones.find();
        const donacionesConId = donaciones.map(donaciones => ({
            id: donaciones.id,
            nombre: donaciones.nombre,
            email: donaciones.email,
            telefono: donaciones.telefono,
            monto: donaciones.monto,
            tipo: donaciones.tipo
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
                id: donacion.id,
                nombre: donacion.nombre,
                email: donacion.email,
                telefono: donacion.telefono,
                monto: donacion.monto,
                tipo: donacion.tipo
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
            nombre: req.body.name,
            email: req.body.email,
            telefono: req.body.telefono,
            monto: req.body.monto,
            tipo: req.body.tipo
        });
        const donacionGuardada = await nuevaDonacion.save();
        res.status(201).json({
            id: donacionGuardada.id,
            nombre: donacionGuardada.nombre,
            email: donacionGuardada.email,
            telefono: donacionGuardada.telefono,
            monto: donacionGuardada.monto,
            tipo: donacionGuardada.tipo
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la donacion' });
    }
};
// Actualizar un post por ID
exports.updateDonacion = async (req, res) => {
    try {
        const updatedDonacion = await Donaciones.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            monto: req.body.monto,
            tipo: req.body.tipo
        }, { new: true });
        if (updatedDonacion) {
            res.json({
                id: updatedDonacion.id,
                nombre: updatedDonacion.nombre,
                email: updatedDonacion.email,
                telefono: updatedDonacion.telefono,
                monto: updatedDonacion.monto,
                tipo: updatedDonacion.tipo
            });
        } else {
            res.status(404).json({ error: 'Donacion no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la donacion' });
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