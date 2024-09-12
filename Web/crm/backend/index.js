const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');

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

//getList, getMany, getManyReference
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

//getOne
app.get("/usuarios/:id", async (req, res) => {
    let data = await db.collection("usuarios").find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
});

//create

//update
app.put("/usuarios/:id", async (req, res) => {
    let addValues = req.body;
    addValues["id"] = Number(req.params.id);
    let data = await db.collection("usuarios").updateOne({id: addValues["id"]}, {"$set": addValues});
    data = await db.collection("usuarios").find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
});

//delete


app.listen(3000, () => {
    connectDB();
    console.log("El servidor corre en el puerto 3000");
});
