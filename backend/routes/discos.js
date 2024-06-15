const express = require('express');
const router = express.Router();
const discosController = require('../controllers/discos');

router.get('/', discosController.obtenerDiscos);

module.exports = router;
