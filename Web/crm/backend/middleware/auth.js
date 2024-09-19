const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Token inválido' });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'No se proporcionó token' });
    }
};

module.exports = authenticateJWT;