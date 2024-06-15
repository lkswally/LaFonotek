const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generos');

router.get('/', generosController.obtenerGeneros);
router.get('/:id', generosController.obtenerGeneroPorId);
router.post('/', generosController.crearGenero);
router.put('/:id', generosController.actualizarGenero);
router.delete('/:id', generosController.eliminarGenero);

module.exports = router;
