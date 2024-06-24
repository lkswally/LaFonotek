const express = require('express');
const router = express.Router();
const generosController = require('../controllers/membresia');

router.get('/', generosController.obtenerMembresia);

module.exports = router;