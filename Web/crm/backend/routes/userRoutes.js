const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../middleware/auth');

router.post('/register', userController.register); // Ruta para registrar usuario (se podría crear un rol de super-usaurio para administrarlo y solicitar validación de token)
router.post('/login', userController.login); // Ruta para login de usuario
router.get('/', authenticateJWT, userController.getAllUsuarios); // Obtener todos los posts
router.get('/:id', authenticateJWT, userController.getUsuarioById); // Obtener un post por ID
router.post('/', authenticateJWT, userController.createUsuario); // Crear un nuevo post
router.put('/:id', authenticateJWT, userController.updateUsuario); // Actualizar un post por ID
router.delete('/:id', authenticateJWT, userController.deleteUsuario);

module.exports = router;