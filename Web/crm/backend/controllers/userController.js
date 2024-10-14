const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usuarios');

exports.register = async (req, res) => {
    try {
        const { username, password, role, name, email, phone } = req.body;        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role, name, email, phone });
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
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }
        if (user && isMatch) { 
            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({
                token,
                role: user.role,
                name: user.name,
                email: user.email, // Incluyendo el email en la respuesta
                phone: user.phone
            });
        } else {
            res.status(401).json({ error: 'Nombre de Usuario o contraseña inválidas' });
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
            username: usuarios.username,
            role: usuarios.role,
            name: usuarios.name,
            email: usuarios.email,
            phone: usuarios.phone
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
                username: usuario.username,
                role: usuario.role,
                name: usuario.name,
                email: usuario.email,
                phone: usuario.phone
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
        const { username, password, role, name, email, phone } = req.body;
        if (!password) {
            return res.status(400).json({ error: 'Password requerido' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = new User({
            id: req.body._id,
            username,
            password: hashedPassword,
            role,
            name,
            email,
            phone
        });
        const donacionGuardada = await nuevoUsuario.save();
        res.status(201).json({
            id: donacionGuardada._id,
            username: donacionGuardada.username,
            role: donacionGuardada.role,
            name: donacionGuardada.name,
            email: donacionGuardada.email,
            phone: donacionGuardada.phone
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear el usuario', details: err });
    }
};
// Actualizar un post por ID
exports.updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            username: req.body.username,
            role: req.body.role,
            email: req.body.email,
            phone: req.body.phone
        }, { new: true });
        if (updatedUsuario) {
            res.json({
                id: updatedDonacion._id,
                username: updatedDonacion.username,
                role: updatedDonacion.role,
                name: updatedDonacion.name,
                email: updatedDonacion.email,
                phone: updatedDonacion.phone
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