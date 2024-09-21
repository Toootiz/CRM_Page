const express = require("express");
const https = require('https');
const cors = require('cors');
const fs = require('fs');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const donationRoutes = require('./routes/donationRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();


app.use(cors({
    origin: 'https://localhost:5173', 
    exposedHeaders: ['X-Total-Count'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/donations', donationRoutes);

const privateKey = fs.readFileSync('../certs/server.key', 'utf8');
const certificate = fs.readFileSync('../certs/server.crt', 'utf8');
const ca = fs.readFileSync('../certs/ca.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate, ca: ca };


//Servidor HTTPS
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => console.log(`Server running on port ${port} with HTTPS`));
