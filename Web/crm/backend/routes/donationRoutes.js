const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationsController');
const authenticateJWT = require('../middleware/auth');

router.get('/', authenticateJWT, donationController.getAllPosts); // Obtener todos los posts
router.get('/:id', authenticateJWT, donationController.getPostById); // Obtener un post por ID
router.post('/', authenticateJWT, donationController.createPost); // Crear un nuevo post
router.put('/:id', authenticateJWT, donationController.updatePost); // Actualizar un post por ID
router.delete('/:id', authenticateJWT, donationController.deletePost); // Eliminar un post por ID

module.exports = router;