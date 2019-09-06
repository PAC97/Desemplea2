const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const salt = 10;

 const UsuariosSchema = new Schema({
    Nombres:{ type: String} ,
    Apellidos: {type: String} ,
    Edad: {type: String} ,
    Telefono: {type: String} ,
    Direccion: {type: String} ,
    Correo: {type: String,  unique: true} ,
    Password: {type: String} ,
    ID_TipoUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoUsuario'},
    ID_Servicio:{type: mongoose.Schema.Types.ObjectId,
        ref: 'servicios'},
    pathImg: {type: String}
});

//Hashear password
UsuariosSchema.pre('save', function(next){
    this.Password = bcrypt.hashSync(this.Password, salt);
    next();
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);