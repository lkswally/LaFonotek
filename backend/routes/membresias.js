const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig')
const membresiasController = require('../controllers/membresias');

const { 
    obtenerMembresias, 
} = require('../controllers/membresias');

//para obtener membresias
router.get('/', membresiasController.obtenerMembresia); 