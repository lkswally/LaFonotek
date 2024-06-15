const express = require('express');
const router = express.Router();
const carritosController = require('../controllers/carritos');

// Ruta para obtener todos los carritos (posiblemente con filtros)
router.get('/', carritosController.obtenerCarritos);

// Ruta para obtener un carrito por ID
router.get('/:id', carritosController.obtenerCarritoPorId);

// Ruta para crear un nuevo carrito
router.post('/', carritosController.crearCarrito);

// Ruta para agregar un disco a un carrito
router.post('/:id/discos', carritosController.agregarDiscoACarrito);

// Ruta para actualizar la cantidad de un disco en un carrito
router.put('/:id/discos/:discoId', carritosController.actualizarCantidadDisco);

// Ruta para eliminar un disco de un carrito
router.delete('/:id/discos/:discoId', carritosController.eliminarDiscoDeCarrito);

// Ruta para vaciar un carrito
router.delete('/:id', carritosController.vaciarCarrito);

module.exports = router;
