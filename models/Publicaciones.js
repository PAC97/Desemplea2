const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicacionesSchema = new Schema({
    Titulo: {
        type: String,
        required: true
    } ,
    Descripcion: {
        type: String,
        required: true
    } ,
    Usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    }
});

module.exports = mongoose.model('Publicaciones', PublicacionesSchema);