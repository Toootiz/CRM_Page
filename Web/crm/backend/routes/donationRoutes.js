const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationsController');
const authenticateJWT = require('../middleware/auth');

router.get('/', authenticateJWT, donationController.getAllDonaciones); // Obtener todos los posts
router.get('/:id', authenticateJWT, donationController.getDonacionById); // Obtener un post por ID
router.post('/', authenticateJWT, donationController.createDonacion); // Crear un nuevo post
router.put('/:id', authenticateJWT, donationController.updateDonacion); // Actualizar un post por ID
router.delete('/:id', authenticateJWT, donationController.deleteDonacion); // Eliminar un post por ID

module.exports = router;