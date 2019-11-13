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
    Servicios:[{nombre: String}],
    pathImg: {type: String},
    Region: {type: String},
    Estado: {type: Boolean},
    Acciones: [{accion: String}]
});

//Hashear password
UsuariosSchema.pre('save', function(next){
    //Si el password ya esta hasheado no se hace nada
    if(!this.isModified('Password')){
        return next();
    }
    this.Password = bcrypt.hashSync(this.Password, salt);
    next();
});


module.exports = mongoose.model('Usuarios', UsuariosSchema);