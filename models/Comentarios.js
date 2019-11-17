const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentariosSchema = new Schema({
    ID_Usuario:{
        type: mongoose.Types.ObjectId,
        ref: 'Usuarios'
    },
    ID_Publicacion:{
        type: mongoose.Types.ObjectId,
        ref: 'Publicaciones'
    },
    Comentario:{
        type: String
    }
})

module.exports = mongoose.model('Comentarios', comentariosSchema);