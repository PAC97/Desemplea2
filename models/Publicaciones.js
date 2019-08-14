const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicacionesSchema = new Schema({
    Titulo: String,
    Descripcion: String,
    Usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios'
    }
});

module.exports = mongoose.model('Publicaciones', PublicacionesSchema);