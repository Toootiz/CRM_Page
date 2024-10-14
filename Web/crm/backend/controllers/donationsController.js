const nodemailer = require('nodemailer');
const Donaciones = require('../models/donaciones');

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true para usar SSL
    auth: {
        user: "test.testertestorio@gmail.com",
        pass: "jdtv axxi dpuo sebk"
    }
});

// Función para enviar el correo de agradecimiento
const sendThankYouEmail = async (email, name, donationAmount) => {
    const mailOptions = {
        from: '"Fundación SANDERS" <tu-correo@gmail.com>',
        to: email,
        subject: 'Gracias por tu donación',
        html: `
            <p>Estimado ${name}, ¡gracias por tu donación de $${donationAmount} !</p>
            <p>Esta donación será utilizada para la elaboración, instalación y mantenimiento de un sistema de recolección de agua fluvial, la cual le permitirá a familias en situaciones vulnerables a tener una mejor vida, con más y mejores oportunidades.</p>

            <p>De corazón, la Fundación Sanders te lo agradece! </p>
            
            <img src="https://sanders.com.mx/wp-content/uploads/2022/08/5.png" alt="Gracias" />
	
        `
    };

    try {
        console.log(`Enviando correo a: ${email}`);
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado correctamente: ' + info.response);
    } catch (error) {
        console.error('Error enviando el correo: ', error);
        throw new Error('Error enviando el correo');
    }
};

// Obtener todas las donaciones
exports.getAllDonaciones = async (req, res) => {
    try {
        console.log('Obteniendo todas las donaciones...');
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
        console.log(`Se encontraron ${donaciones.length} donaciones.`);
        res.set('X-Total-Count', donaciones.length);
        res.json(donacionesConId);
    } catch (err) {
        console.error('Error al obtener las donaciones: ', err);
        res.status(500).json({ error: 'Error al obtener las donaciones' });
    }
};

// Obtener una donación por ID
exports.getDonacionById = async (req, res) => {
    try {
        console.log(`Buscando donación con ID: ${req.params.id}`);
        const donacion = await Donaciones.findById(req.params.id);
        if (donacion) {
            console.log(`Donación encontrada: ${donacion}`);
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
            console.log('Donación no encontrada');
            res.status(404).json({ error: 'Donación no encontrada' });
        }
    } catch (err) {
        console.error('Error al obtener la donación: ', err);
        res.status(500).json({ error: 'Error al obtener la donación' });
    }
};


// Obtener donaciones por correo electrónico
exports.getDonacionesByEmail = async (req, res) => {
    try {
        const { email } = req.params;  // Obtener el email desde los parámetros de la URL
        console.log(`Buscando donaciones con email: ${email}`);

        // Filtrar las donaciones por email
        const donaciones = await Donaciones.find({ email });

        if (donaciones.length > 0) {
            // Si se encuentran donaciones, procesarlas
            const donacionesConId = donaciones.map(donacion => ({
                id: donacion._id,
                name: donacion.name,
                email: donacion.email,
                phone: donacion.phone,
                amount: donacion.amount,
                date: donacion.date,
                type: donacion.type
            }));

            console.log(`Se encontraron ${donaciones.length} donaciones para el correo: ${email}`);

            // Asegurarse de enviar siempre X-Total-Count
            res.set('X-Total-Count', donaciones.length);
            res.set('Access-Control-Expose-Headers', 'X-Total-Count');  // Asegurar que la cabecera esté expuesta
            res.json(donacionesConId);  // Enviar las donaciones encontradas al cliente
        } else {
            console.log(`No se encontraron donaciones para el correo: ${email}`);
            res.status(404).json({ error: `No se encontraron donaciones para el correo ${email}` });
        }
    } catch (err) {
        console.error('Error al obtener las donaciones:', err);
        res.status(500).json({ error: 'Error al obtener las donaciones por correo' });
    }
};



// Crear una nueva donación
exports.createDonacion = async (req, res) => {
    console.log('Recibiendo datos de nueva donación:', req.body);
    try {
        const nuevaDonacion = new Donaciones({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type
        });

        const donacionGuardada = await nuevaDonacion.save();
        console.log('Donación guardada correctamente:', donacionGuardada);

        // Enviar el correo de agradecimiento
        await sendThankYouEmail(donacionGuardada.email, donacionGuardada.name, donacionGuardada.amount);

        // Responder con la donación guardada
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
        console.error('Error al crear la donación:', err);
        res.status(500).json({ error: 'Error al crear la donación y enviar el correo', details: err });
    }
};

// Actualizar una donación por ID
exports.updateDonacion = async (req, res) => {
    console.log(`Actualizando donación con ID: ${req.params.id}`);
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
            console.log('Donación actualizada correctamente:', updatedDonacion);
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
            console.log('Donación no encontrada para actualizar');
            res.status(404).json({ error: 'Donación no encontrada' });
        }
    } catch (err) {
        console.error('Error al actualizar la donación:', err);
        res.status(500).json({ error: 'Error al actualizar la donación', details: err });
    }
};

// Eliminar una donación por ID
exports.deleteDonacion = async (req, res) => {
    console.log(`Eliminando donación con ID: ${req.params.id}`);
    try {
        const deletedDonacion = await Donaciones.findByIdAndDelete(req.params.id);
        if (deletedDonacion) {
            console.log('Donación eliminada correctamente:', deletedDonacion);
            res.json({ id: deletedDonacion._id });
        } else {
            console.log('Donación no encontrada para eliminar');
            res.status(404).json({ error: 'Donación no encontrada' });
        }
    } catch (err) {
        console.error('Error al eliminar la donación:', err);
        res.status(500).json({ error: 'Error al eliminar la donación' });
    }
};
