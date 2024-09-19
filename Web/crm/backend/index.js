const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserSchema, hashPassword, comparePassword } = require('./userController');

let db;
const app = express();
app.use(cors());
app.use(bodyParser.json());

async function connectDB() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('SandersDB');
    console.log("Conectado a la base de datos");
}

//Registro de usuario
app.post("/auth/register", async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        const user = { username, password: hashedPassword, role };
        await db.collection("usuarios").insertOne(user);
        res.status(201).send('Usuario registrado');
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});

//Login de usuario
app.post("/auth/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await db.collection("usuarios").findOne({ username });
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }

        const isValid = await comparePassword(password, user.password);
        if (!isValid) {
            return res.status(401).send('Contraseña incorrecta');
        }

        if (user && isMatch) {
            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token, role: user.role });
        } else {
            res.status(401).json({ error: 'Credenciales invalidas' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});    

//Endopoints de usuarios

//getList, getMany, getManyReference usuarios
app.get("/usuarios", async (req, res) => {
    if ("_sort" in req.query) { // List
        let sortBy = req.query._sort;
        let sortOrder = req.query._order === "ASC" ? 1 : -1;
        let start = Number(req.query._start);
        let end = Number(req.query._end);
        let sorter = {};
        sorter[sortBy] = sortOrder;
        let data = await db.collection("usuarios").find().sort(sorter).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        data = data.slice(start, end);
        res.json(data);
    } else if ("id" in req.query) { // Many
        let data = [];
        for (let index = 0; index < req.query.id.length; index++) {
            let dbData = await db.collection("usuarios").find({id: Number(req.query.id[index])}).project({_id: 0}).toArray();
            data = data.concat(dbData);
        }
        res.json(data);
    } else { // Reference
        let data = await db.collection("usuarios").find(req.query).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        res.json(data);
    }
});

//getOne usuarios
app.get("/usuarios/:id", async (req, res) => {
    let data = await db.collection("usuarios").find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
});

//create usuarios
app.post("/usuarios/", async (req, res) => {
    let addValues = req.body;
    let data = await db.collection("usuarios").find({}).toArray();
    let id = data.length + 1;
    addValues["id"] = id;
    data = await db.collection("usuarios").insertOne(addValues);
    res.json(data);
});

//update usuarios
app.put("/usuarios/:id", async (req, res) => {
    let addValues = req.body;
    addValues["id"] = Number(req.params.id);
    let data = await db.collection("usuarios").updateOne({id: addValues["id"]}, {"$set": addValues});
    data = await db.collection("usuarios").find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
});

//delete usuarios
app.delete("/usuarios/:id", async (req, res) => {
    let data = await db.collection("usuarios").deleteOne({id: Number(req.params.id)})
    res.json(data);
});

//Endpoints donaciones

//getList, getMany, getManyReference donaciones
app.get("/donaciones", async (req, res) => {
    if ("_sort" in req.query) { // List
        let sortBy = req.query._sort;
        let sortOrder = req.query._order === "ASC" ? 1 : -1;
        let start = Number(req.query._start);
        let end = Number(req.query._end);
        let sorter = {};
        sorter[sortBy] = sortOrder;
        let data = await db.collection("donaciones").find().sort(sorter).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        data = data.slice(start, end);
        res.json(data);
    } else if ("id" in req.query) { // Many
        let data = [];
        for (let index = 0; index < req.query.id.length; index++) {
            let dbData = await db.collection("donaciones").find({id: Number(req.query.id[index])}).project({_id: 0}).toArray();
            data = data.concat(dbData);
        }
        res.json(data);
    } else { // Reference
        let data = await db.collection("donaciones").find(req.query).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        res.json(data);
    }
});

//getOne donaciones
app.get("/donaciones/:id", async (req, res) => {
    let data = await db.collection("donaciones").find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
});

//create donaciones
app.post("/donaciones/", async (req, res) => {
    let addValues = req.body;
    let data = await db.collection("donaciones").find({}).toArray();
    let id = data.length + 1;
    addValues["id"] = id;
    data = await db.collection("donaciones").insertOne(addValues);
    res.json(data);
});

//update donaciones
app.put("/donaciones/:id", async (req, res) => {
    let addValues = req.body;
    addValues["id"] = Number(req.params.id);
    let data = await db.collection("donaciones").updateOne({id: addValues["id"]}, {"$set": addValues});
    data = await db.collection("donaciones").find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
});

//delete donaciones
app.delete("/donaciones/:id", async (req, res) => {
    let data = await db.collection("donaciones").deleteOne({id: Number(req.params.id)})
    res.json(data);
});

app.listen(3000, () => {
    connectDB();
    console.log("El servidor corre en el puerto 3000");
});
