const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generos');

router.get('/', generosController.obtenerGeneros);

module.exports = router;
