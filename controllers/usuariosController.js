const Usuarios = require('../models/Usuario');
exports.usuariosLista = async (req, res) => {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
}

exports.crearUsuario = async (req, res) => {
    const usuario = new Usuarios()
    usuario.Nombres = req.body.Nombres,
    usuario.Apellidos = req.body.Apellidos,
    usuario.Edad = req.body.Edad,
    usuario.Telefono = req.body.Telefono,
    usuario.Direccion = req.body.Direccion,
    usuario.Correo = req.body.Correo,
    usuario.ID_TipoUsuario = req.body.ID_TipoUsuario,
    usuario.ID_Servicio = req.body.ID_Servicio

    usuario.save((err, usuario) =>{
        if(err) res.status(500).send({mensaje: `Error al insertar Servicio: ${err}`})

        res.status(200).send({usuario: usuario})
    })
}

exports.usuarioPorId = async (req, res) => {
    const id = req.params.id;
    const usuario = await Usuarios.findById(id, (err, usuario)=>{
        if(err) res.status(500).send({mensaje: `Error al realizar la peticion: ${err}`})
        if(!usuario) res.status(404).send({mensaje: 'No se encuentra ese dato'})
        else{
            res.status(200).send({usuario : usuario})
            console.log(usuario);
        }
    });
}

exports.actualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const {nombre, descripcion} = req.body;
    const servicio = await Servicios.findByIdAndUpdate(id, {$set: {
        nombre,
        descripcion
    }}, {new : true}, function(err, servicio){
        if(err){
            console.log('Error:', err);
            res.send('Error')
        }
        console.log(servicio);
        res.send('Actualizado');
    });
}

exports.eliminarServicio = async (req, res) => {
    const id = req.params.id;
    
    const usuario = await Usuarios.findByIdAndRemove(id, (err, usuario)=>{
        if(err) {
            throw err;
        }
        if(!usuario) res.status(404).send('No se encuentra ese dato')
        res.status(200).send('Servicio eliminado')
    })
}