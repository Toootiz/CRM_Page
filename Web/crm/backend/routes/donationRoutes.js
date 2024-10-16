const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationsController');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, donationController.getAllDonaciones);
router.get('/:id', authenticateJWT, donationController.getDonacionById);
router.post('/', authenticateJWT, donationController.createDonacion);
router.put('/:id', authenticateJWT, donationController.updateDonacion);
router.delete('/:id', authenticateJWT, donationController.deleteDonacion);
router.post('/create',  donationController.createDonacion);
router.get('/email/:email', authenticateJWT, donationController.getDonacionesByEmail);


module.exports = router;
