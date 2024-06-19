const express = require('express');
const router = express.Router();
const discosController = require('../controllers/discos');
// const authMiddleware = require('../middlewares/authMiddleware'); // Middleware que no puedo hacer funcionar

//para obtener discos
router.get('/', discosController.obtenerDiscos);
router.get('/:id', discosController.obtenerDiscoPorId); 

//para editar un disco
router.put('/:id', discosController.editarDisco);

//para eliminar un disco
router.delete('/:id', discosController.eliminarDisco);



module.exports = router;
