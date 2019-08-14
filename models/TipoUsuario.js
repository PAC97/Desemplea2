const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoUsuarioSchema = new Schema({
    
    nombre: String,
    descripcion: String
},
{
    versionKey: false
});


module.exports  = mongoose.model('TipoUsuario', TipoUsuarioSchema);
