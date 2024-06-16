const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ajusta la ruta al controlador

router.post('/login', authController.login);

module.exports = router;