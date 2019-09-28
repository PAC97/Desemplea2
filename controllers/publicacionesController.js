const Publicaciones = require('../models/Publicaciones');
exports.publicacionesLista = async (req, res) => {
    await Publicaciones.find({})
    .populate('Usuario')
    .exec(function(err, publicaciones){
        if(err) res.status(500).json('Error')
        console.log(publicaciones);
        res.json({publicaciones});
    });
    
}

exports.crearPublicacion = async (req, res) => {
    const publicacion = await new Publicaciones()
    publicacion.Titulo = req.body.Titulo
    publicacion.Descripcion = req.body.Descripcion
    publicacion.Usuario = req.body.Usuario

    publicacion.save((err, publicacion) =>{
        if(err) res.status(500).json({mensaje: `Error al insertar Tipo de Usuario: ${err}`})

        res.status(200).json({publicacion});
    })
}

exports.publicacionPorId = async (req, res, next) => {
    const id = req.params.id;
    
   const publicacion = await Publicaciones.findById(id, (err, publicacion)=>{   
        if(err) res.status(500).json({mensaje: `Error al realizar la peticion: ${err}`})
        if(!publicacion) res.status(404).json({mensaje: 'No se encuentra ese dato'})
        else{
            res.status(200).json({publicacion : publicacion})
            console.log(publicacion);
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
            console.log('Error:', err);
            res.json('Error')
        }
        console.log(publicacion);
        res.json('Actualizado');
    });
}

exports.eliminarPublicacion = async (req, res) => {
    const id = req.params.id;
    
    const publicacion = await Publicaciones.findByIdAndRemove(id, (err, publicacion)=>{
        if(err) {
            throw err;
        }
        if(!publicacion) res.status(404).json({mensaje: 'No se encuentra ese dato'})
        res.json('Publicacion elimiada')
    })
}

exports.publicacionPorUsuario = async (req, res)=>{
    const idUsuario = req.params.usuario;
    console.log(idUsuario);
    const publicacion = await Publicaciones.find({$or:[{'Usuario':idUsuario}]},(err, publicaciones)=>{
        if(err){
            throw err;
        }
        if(!publicaciones) res.status(404).json({mensaje:'No se encuentra la publicacion'})
        res.status(200).json({publicaciones : publicaciones})
    })
}