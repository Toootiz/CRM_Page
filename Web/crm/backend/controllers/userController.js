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