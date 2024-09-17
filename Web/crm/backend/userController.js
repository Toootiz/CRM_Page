const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');

const userSchema = {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String, 
        enum: ['administrador', 'lector'], 
        default: 'lector' 
    }
};

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = { userSchema, hashPassword, comparePassword };