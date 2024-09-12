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

//getOne

//create

//update

//delete


app.listen(3000, () => {
    connectDB();
    console.log("El servidor corre en el puerto 3000");
});
