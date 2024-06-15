const express = require('express');
const router = express.Router();
const discosController = require('../controllers/discos');

router.get('/', discosController.obtenerDiscos);
router.get('/:id', discosController.obtenerDiscoPorId);
router.post('/', discosController.crearDisco);
router.put('/:id', discosController.actualizarDisco);
router.delete('/:id', discosController.eliminarDisco);

module.exports = router;
