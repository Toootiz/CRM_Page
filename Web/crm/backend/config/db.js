const mongoose = require('mongoose');
//const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

/*
let db;
const connectDB = async () => {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('SandersDB');
    console.log("Conectado a la base de datos");
}
*/
module.exports = connectDB;
