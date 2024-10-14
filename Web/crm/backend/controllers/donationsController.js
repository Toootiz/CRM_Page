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

            // Asegurarse de enviar siempre X-Totalg-Count
            res.set('X-Total-Count', donaciones.lenth);
            res.set('Access-Control-Expose-Headers', 'X-Total-Count');  // Asegurar que la cabecera esté expuesta
            res.json(donacionesConId);  // Enviar las donaciones encontradas al cliente
        } else {
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
            res.status(404).json({ error: 'Donación no encontrada' });
        }
    } catch (err) {
        console.error('Error al actualizar la donación:', err);
        res.status(500).json({ error: 'Error al actualizar la donación', details: err });
    }
};

// Eliminar una donación por ID
exports.deleteDonacion = async (req, res) => {
    try {
        const deletedDonacion = await Donaciones.findByIdAndDelete(req.params.id);
        if (deletedDonacion) {
            res.json({ id: deletedDonacion._id });
        } else {
            res.status(404).json({ error: 'Donación no encontrada' });
        }
    } catch (err) {
        console.error('Error al eliminar la donación:', err);
        res.status(500).json({ error: 'Error al eliminar la donación' });
    }
};
