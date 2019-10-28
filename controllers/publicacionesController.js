const Publicaciones = require('../models/Publicaciones');
exports.publicacionesLista = async (req, res) => {
    await Publicaciones.find({})
    .populate('Usuario')
    .populate('ID_Servicio')
    .exec(function(err, publicaciones){
        if(err) res.status(500).json('Error')
       
        res.json({publicaciones});
        
    });
    
}

exports.crearPublicacion = async (req, res) => {
    const publicacion = await new Publicaciones()
    publicacion.Titulo = req.body.Titulo
    publicacion.Descripcion = req.body.Descripcion
    publicacion.Usuario = req.body.Usuario
    publicacion.ID_Servicio = req.body.ID_Servicio

    publicacion.save((err, publicacion) =>{
        if(err) res.status(500).json({mensaje: `Error al insertar Tipo de Usuario: ${err}`})

        res.status(200).json({status: 'Success', publicacion: publicacion})
    })
}

exports.publicacionPorId = async (req, res, next) => {
    const id = req.params.id;
    
   const publicacion = await Publicaciones.findById({_id: id}).
   populate('ID_Servicio').
   exec((err, publicacion)=>{
    if(err) res.status(500).json({mensaje: `Error al realizar la peticion: ${err}`})
    if(!publicacion) res.status(404).json({mensaje: 'No se encuentra ese dato'})
    else{
        res.status(200).json({status: 'Success', publicacion: publicacion})
        
    }
   }) 
        
    
}

exports.actualizarPublicacion = async (req, res) => {
    const id = req.params.id;
    const {Titulo, Descripcion} = req.body;
    const publicacion = await Publicaciones.findByIdAndUpdate(id, {$set: {
        Titulo,
        Descripcion
    }}, {new : true}, function(err, publicacion){
        if(err){
           
            res.json('Error')
        }
      
        res.status(200).json({status: 'Success', mensaje: 'Actualizada'})
    });
}

exports.eliminarPublicacion = async (req, res) => {
    const id = req.params.id;
    
    const publicacion = await Publicaciones.findByIdAndRemove(id, (err, publicacion)=>{
        if(err) {
            throw err;
        }
        if(!publicacion) res.status(404).json({mensaje: 'No se encuentra ese dato'})
        res.status(200).json({status: 'Success', mensaje:'Publicacion eliminada.'})
    })
}

exports.publicacionPorUsuario = async (req, res)=>{
    const idUsuario = req.params.usuario;
    
    const publicacion = await Publicaciones.find({$or:[{'Usuario':idUsuario}]}).
    populate('ID_Servicio').
    exec((err, publicaciones)=>{
        if(err){
            throw err;
        }
        if(!publicaciones) res.status(404).json({mensaje:'No se encuentra la publicacion'})
        res.status(200).json({status: 'Success', publicaciones: publicaciones})
        
    })
}

exports.publicacionPorServicio = async (req, res)=>{
    const idServicio = req.params.servicio;
    
    const publicacion = await Publicaciones.find({$or:[{'ID_Servicio':idServicio}]},(err, publicaciones)=>{
        if(err){
            throw err;
        }
        if(!publicaciones) res.status(404).json({mensaje:'No se encuentra la publicacion'})
        res.status(200).json({status: 'Success', publicaciones: publicaciones})
        
    })
}