const Usuario = require('../models').Usuario;
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  console.log('Datos recibidos:', req.body);
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    console.log('Usuario encontrado:', usuario);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const validPassword = await bcrypt.compare(password, usuario.contrasena);
    console.log('Contraseña válida:', validPassword);
    if (!validPassword) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Login exitoso', usuario }); // Enviamos los datos del usuario al frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Tenemos un error en el servidor' });
  }
};
