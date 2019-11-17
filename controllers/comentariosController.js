const Comentarios = require('../models/Comentarios');

exports.comentariosPublicacion = async (req, res) => {
   const comentarios = await Comentarios.find({ID_Publicacion:req.params.idPubli})
   res.status(200).json(comentarios)
}

exports.agregarComentario = async (req, res) => {
   const comentario = new Comentarios(req.body);

   try {
      await comentario.save();
      res.status(200).json({status: 'Success', comentario: comentario})
   } catch (error) {
      if(error) res.status(500).json({mensaje: `Error al insertar Comentario: ${error}`})
   }
   
}

exports.modificarComentario = async (req, res) => {
   const comentario = await Comentarios.findById(req.params.id);
   comentario.ID_Usuario = req.body.ID_Usuario;
   comentario.ID_Publicacion = req.body.ID_Publicacion;
   comentario.Comentario = req.body.Comentario;

   comentario.save((err, comentario) => {
      if(err) res.status(500).json({mensaje: `Error al Modificar Comentario: ${err}`})
      res.status(200).json({status: 'success', mensaje:'Comentario Modificado correctamente', comentario:comentario});
   })
}

exports.eliminarComentario = async (req, res) => {
   const comentario = await Comentarios.findById(req.params.id);

   comentario.remove((err, comentario)=> {
      if(err) res.status(500).json({mensaje: `Error al Eliminar Comentario: ${err}`})
      res.status(200).json({status: 'success', mensaje:'Comentario Eliminado correctamente'});
   })
}