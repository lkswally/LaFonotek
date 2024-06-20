const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig')
// const authMiddleware = require('../middlewares/authMiddleware'); // Middleware que no puedo hacer funcionar

const { 
    obtenerDiscos, 
    obtenerDiscoPorId, 
    editarDisco, 
    eliminarDisco, 
    crearDisco 
} = require('../controllers/discos');

//para obtener discos
router.get('/', obtenerDiscos);
router.get('/:id', obtenerDiscoPorId); 

//para editar un disco
router.put('/:id', editarDisco);

//para eliminar un disco
router.delete('/:id', eliminarDisco);

//para crear
router.post('/', crearDisco);


module.exports = router;
