const express = require("express");
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

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/donations', donationRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));