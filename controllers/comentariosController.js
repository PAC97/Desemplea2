const Comentarios = require('../models/Comentarios');

exports.comentariosPublicacion = async (req, res) => {
   const comentarios = await Comentarios.find({ID_Publicacion:req.params.idPubli})
   res.status(200).json(comentarios)
}