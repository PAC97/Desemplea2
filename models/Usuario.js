const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const salt = 10;

 const UsuariosSchema = new Schema({
    Nombres:{ type: String, required: true} ,
    Apellidos: {type: String, required: true} ,
    Edad: {type: String, required: true} ,
    Telefono: {type: String, required: true} ,
    Direccion: {type: String, required: true} ,
    Correo: {type: String, required: true, unique: true} ,
    Password: {type: String, required: true} ,
    ID_TipoUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoUsuario',
        required: true},
    ID_Servicio:{type: mongoose.Schema.Types.ObjectId,
        ref: 'servicios',
        required: true}
});

//Hashear password
UsuariosSchema.pre('save', function(next){
    this.Password = bcrypt.hashSync(this.Password, salt);
    next();
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);