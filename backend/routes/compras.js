const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/compras');

router.get('/', comprasController.obtenerCompras);
router.get('/:id', comprasController.obtenerCompraPorId);
router.post('/', comprasController.crearCompra);
router.put('/:id', comprasController.actualizarCompra);
router.delete('/:id', comprasController.eliminarCompra);

module.exports = router;
