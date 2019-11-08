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
    usuario.Password = req.body.Password,
    usuario.ID_TipoUsuario = req.body.ID_TipoUsuario,
    usuario.Servicios = req.body.Servicios,
    usuario.pathImg = req.body.pathImg,
    usuario.Estado = req.body.Estado,
    usuario.Acciones = req.body.Acciones
    usuario.save((err, usuario) =>{
        if(err) res.status(500).json({mensaje: `Error al insertar Servicio: ${err}`})
        res.json({status: 'success', mensaje:'Usuario agregado correctamente', usuario:null});
    })
}

exports.usuarioPorId = async (req, res) => {
    const id = req.params.id;
    const usuario = await Usuarios.findById(id, (err, usuario)=>{
        if(err) res.status(500).json({mensaje: `Error al realizar la peticion: ${err}`})
        if(!usuario) res.status(404).json({mensaje: 'No se encuentra ese dato'})
        else{
            res.status(200).json({status: 'Success', mensaje : 'Usuario encontrado.', usuario})
            
        }
    });
}

exports.actualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const {Nombres, Apellidos, Edad, Telefono, Direccion, Correo, Password, ID_TipoUsuario, Servicios, pathImg, Estado} = req.body;
    const usuario = await Usuarios.findByIdAndUpdate(id, {$set: {
        Nombres,
        Apellidos,
        Edad,
        Telefono,
        Direccion,
        Correo,
        Password,
        ID_TipoUsuario,
        Servicios,
        pathImg,
        Estado
    }}, {new : true}, function(err, usuario){
        if(err){
            
            res.json({mensaje: 'Error'})
        }
        
        res.status(200).json({status:'Success', mensaje: 'Actualizado', Usuario: usuario});
    });
}

exports.eliminarusuario = async (req, res) => {
    const id = req.params.id;
    
    const usuario = await Usuarios.findByIdAndRemove(id, (err, usuario)=>{
        if(err) {
            throw err;
        }
        if(!usuario) res.status(404).json({mensaje:'No se encuentra ese dato'})
        res.status(200).json({status:'Success',mensaje: 'Servicio eliminado'})
    })
}