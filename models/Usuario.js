const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const UsuariosSchema = new Schema({
    Nombres: String,
    Apellidos: String,
    Edad: String,
    Telefono: String,
    Direccion: String,
    Correo: String,
    ID_TipoUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoUsuario'
    },
    ID_Servicio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'servicios'
    }
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);