const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');
const fechaActual = moment.tz(Date.now(), "America/El_Salvador");
console.log(fechaActual);
const PublicacionesSchema = new Schema({
    Titulo: {
        type: String   
    } ,
    Descripcion: {
        type: String  
    } ,
    Usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
    },
    Fecha:{
        type: Date,
        default: fechaActual
    }
});

module.exports = mongoose.model('Publicaciones', PublicacionesSchema);