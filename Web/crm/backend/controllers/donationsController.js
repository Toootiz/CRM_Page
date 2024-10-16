const nodemailer = require('nodemailer');
const Donaciones = require('../models/donaciones');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.CORREO,
        pass: process.env.PASS
    }
});


const sendThankYouEmail = async (email, name, donationAmount) => {
    const mailOptions = {
        from: '"Fundación SANDERS" <tu-correo@gmail.com>',
        to: email,
        subject: 'Gracias por tu donación!',
        html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #333;">¡Gracias por tu donación, ${name}! 🙏💙</h2>
                <p style="font-size: 16px; color: #333;">Tu generosa donación de <strong>$${donationAmount}</strong> hará una gran diferencia. 💧🌍</p>

                <p style="font-size: 16px; color: #555; line-height: 1.5;">
                    Con tu valioso aporte, estaremos más cerca de implementar un sistema de recolección de agua fluvial que cambiará vidas. Este sistema permitirá a familias en situación de vulnerabilidad acceder a agua limpia, mejorando significativamente su calidad de vida y brindándoles más oportunidades de desarrollo. 🌱👨‍👩‍👧‍👦
                </p>

                <p style="font-size: 16px; color: #555; line-height: 1.5;">
                    Gracias a personas como tú, podemos seguir llevando esperanza y soluciones tangibles a quienes más lo necesitan. ✨
                </p>

                <p style="font-size: 16px; color: #333;">
                    De todo corazón, la Fundación Sanders te lo agradece profundamente. ❤️
                </p>

                <p style="font-size: 14px; color: #777;">Atentamente,<br>El equipo de Fundación Sanders</p>

            <div 
                style="
                    background-image: url('https://sanders.com.mx/wp-content/uploads/2022/08/5.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 100%; 
                    max-width: 600px; 
                    height: 300px; 
                    border-radius: 10px; 
                    margin: 20px auto; 
                    box-shadow: 0 0 5px rgba(0,0,0,0.1);">
            </div>

            <div style="max-width: 600px; margin: 20px auto; text-align: center; color: #999; font-size: 12px;">
                <p>Si tienes alguna duda o necesitas más información, no dudes en <a href="mailto:test.testertestorio@gmail.com" style="color: #555; text-decoration: none;">contactarnos</a>.</p>
            </div>
        </div>
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
