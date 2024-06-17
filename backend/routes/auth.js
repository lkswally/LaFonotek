const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ajusta la ruta al controlador

router.post('/', authController.login);

module.exports = router;