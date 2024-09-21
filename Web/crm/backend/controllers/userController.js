const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usuarios');

exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (err) {
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

exports.login = async (req, res) => {
    try {  
        const { password, username } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Password incorrecto' });
        }
        //if (user && await bcrypt.compare(password, user.password)) {
        if (user && isMatch) {
            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token, role: user.role });
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
            id: usuarios._id,
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
                id: usuario._id,
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
        const nuevoUsuario = new User({
            nombre: req.body.name,
            email: req.body.email,
            telefono: req.body.telefono
        });
        const donacionGuardada = await nuevoUsuario.save();
        res.status(201).json({
            id: donacionGuardada._id,
            nombre: donacionGuardada.nombre,
            email: donacionGuardada.email,
            telefono: donacionGuardada.telefono
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};
// Actualizar un post por ID
exports.updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await User.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }, { new: true });
        if (updatedUsuario) {
            res.json({
                id: updatedDonacion._id,
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