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

exports.getAllUsers = async (req, res) => {
    if ("_sort" in req.query) { // List
        let sortBy = req.query._sort;
        let sortOrder = req.query._order === "ASC" ? 1 : -1;
        let start = Number(req.query._start);
        let end = Number(req.query._end);
        let sorter = {};
        sorter[sortBy] = sortOrder;
        let data = await User.find().sort(sorter).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        data = data.slice(start, end);
        res.json(data);
    } else if ("id" in req.query) { // Many
        let data = [];
        for (let index = 0; index < req.query.id.length; index++) {
            let dbData = await User.find({id: Number(req.query.id[index])}).project({_id: 0}).toArray();
            data = data.concat(dbData);
        }
        res.json(data);
    } else { // Reference
        let data = await User.find(req.query).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        res.json(data);
    }
};

exports.getOneUser = async (req, res) => {
    let data = await User.find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
};

exports.createUser = async (req, res) => {
    let addValues = req.body;
    let data = await User.find({}).toArray();
    let id = data.length + 1;
    addValues["id"] = id;
    data = await db.collection("usuarios").insertOne(addValues);
    res.json(data);
};

exports.updateUser = async (req, res) => {
    let addValues = req.body;
    addValues["id"] = Number(req.params.id);
    let data = await User.updateOne({id: addValues["id"]}, {"$set": addValues});
    data = await User.find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
};

exports.deleteUser = async (req, res) => {
    let data = await User.deleteOne({id: Number(req.params.id)})
    res.json(data);
};