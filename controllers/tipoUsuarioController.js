const TipoUsuario = require('../models/TipoUsuario');

exports.tipoUsuarioLista = async (req, res) => {
    const tipoUsuario = await TipoUsuario.find();
    res.json(tipoUsuario);
}

exports.crearTipoUsuario = (req, res) => {
    const tipoUsuario = new TipoUsuario()
    tipoUsuario.nombre = req.body.nombre
    tipoUsuario.descripcion = req.body.descripcion

    tipoUsuario.save((err, tipoUsuarioStored) =>{
        if(err) res.status(500).send({mensaje: `Error al insertar Tipo de Usuario: ${err}`})

        res.status(200).send({tipoUsuario: tipoUsuarioStored})
    })
}

exports.tipoUsuarioPorId = async (req, res, next) => {
    const id = req.params.id;
    
   const tipoUsuario = await TipoUsuario.findById(id, (err, tipoUsuario)=>{   
        if(err) res.status(500).send({mensaje: `Error al realizar la peticion: ${err}`})
        if(!tipoUsuario) res.status(404).send({mensaje: 'No se encuentra ese dato'})
        else{
            res.status(200).send({tipoUsuario : tipoUsuario})
            console.log(tipoUsuario);
        }
        
    })
}

exports.actualizarTipousuario = async (req, res) => {
    const id = req.params.id;
    const {nombre, descripcion} = req.body;
    const tipoUsuario = await TipoUsuario.findByIdAndUpdate(id, {$set: {
        nombre,
        descripcion
    }}, {new : true}, function(err, tipoUsuario){
        if(err){
            console.log('Error:', err);
            res.send('Error')
        }
        console.log(tipoUsuario);
        res.send('Actualizado');
    });
}

exports.eliminarTipousuario = async (req, res) => {
    const id = req.params.id;
    
    const tipoUsuario = await TipoUsuario.findByIdAndRemove(id, (err, tipoUsuario)=>{
        if(err) {
            throw err;
        }
        if(!tipoUsuario) res.status(404).send('No se encuentra ese dato')
        res.send('Tipo usuario eliminado')
    })
}