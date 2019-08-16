const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoUsuarioSchema = new Schema({
    
    nombre:{
        type: String,
        required: true
    } ,
    descripcion: {
        type: String,
        required: true
    } ,
},
{
    versionKey: false
});


module.exports  = mongoose.model('TipoUsuario', TipoUsuarioSchema);
