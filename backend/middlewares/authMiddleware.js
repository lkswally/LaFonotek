exports.isAdmin = (req, res, next) => {
    console.log(req.session)
    // Obtengo el usuario de la sesión!
    const usuario = req.session.usuario;
    console.log("este es el usuario: ",usuario)
  
    if (!usuario || !usuario.isStaff) {
      return res.status(403).json({ error: 'Usuario NO TIENE permisos suficientes!' });
    }
  
    next();
  };
  