const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usuarios');

exports.register = async (req, res) => {
    try {
        const { usuario, contraseña, rol, nombre, email, telefono } = req.body;        
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const newUser = new User({ usuario, password: hashedPassword, rol, nombre, email, telefono });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (err) {
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

exports.login = async (req, res) => {
    try {  
        const { contraseña, usuario } = req.body;
        const user = await User.findOne({ usuario });
        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }
        const isMatch = await bcrypt.compare(contraseña, user.contraseña);
        if (!isMatch) {
            return res.status(401).json({ error: 'Password incorrecto' });
        }
        //if (user && await bcrypt.compare(password, user.password)) {
        if (user && isMatch) {
            const token = jwt.sign({ userId: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token, rol: user.rol });
        } else {
            res.status(401).json({ error: 'Credenciales invalidas' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find();
        const usuariosConId = usuarios.map(usuarios => ({
            id: usuarios.id,
            usuario: usuarios.usuario,
            rol: usuarios.rol,
            nombre: usuarios.nombre,
            email: usuarios.email,
            telefono: usuarios.telefono
        }));
        res.set('X-Total-Count', usuarios.length);
        res.json(usuariosConId);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
// Obtener un post por ID
exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id);
        if (usuario) {
            res.json({
                id: usuario.id,
                usuario: usuario.usuario,
                rol: usuario.rol,
                nombre: usuario.nombre,
                email: usuario.email,
                telefono: usuario.telefono
            });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

// Crear un nuevo post
exports.createUsuario = async (req, res) => {
    try {
        const { usuario, contraseña, rol, nombre, email, telefono } = req.body;
        if (!contraseña) {
            return res.status(400).json({ error: 'Password requerido' });
        }

        const usuarios = await User.find();
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const nuevoUsuario = new User({
            id: usuarios.length + 1,
            usuario,
            contraseña: hashedPassword,
            rol,
            nombre,
            email,
            telefono
        });
        const donacionGuardada = await nuevoUsuario.save();
        res.status(201).json({
            id: donacionGuardada.id,
            usuario: donacionGuardada.usuario,
            rol: donacionGuardada.rol,
            nombre: donacionGuardada.nombre,
            email: donacionGuardada.email,
            telefono: donacionGuardada.telefono
        });
    } catch (err) {
        console.error("Error al crear la donacion", err);
        res.status(500).json({ error: 'Error al crear el usuario', details: err.message });
    }
};
// Actualizar un post por ID
exports.updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await User.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            rol: req.body.rol,
            email: req.body.email,
            telefono: req.body.telefono
        }, { new: true });
        if (updatedUsuario) {
            res.json({
                id: updatedDonacion.id,
                usuario: updatedDonacion.usuario,
                rol: updatedDonacion.rol,
                nombre: updatedDonacion.nombre,
                email: updatedDonacion.email,
                telefono: updatedDonacion.telefono
            });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};
// Eliminar un post por ID
exports.deleteUsuario = async (req, res) => {
    try {
        const deletedUsuario = await User.findByIdAndDelete(req.params.id);
        if (deletedUsuario) {
            res.json({ id: deletedUsuario._id });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};