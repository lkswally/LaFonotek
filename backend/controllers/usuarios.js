// const { Usuario } = require('../models/usuario');
const db = require('../models'); 

exports.obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await db.Usuario.findAll({
        attributes: ['idUsuario', 'nombre', 'apellido', 'email', 'contrasena'] 
      });
      res.json(usuarios); // en formato JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };