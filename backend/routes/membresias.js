const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig')
const membresiasController = require('../controllers/membresias');

router.get('/', membresiasController.obtenerMembresia);

module.exports = router;