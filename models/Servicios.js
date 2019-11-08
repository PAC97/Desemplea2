const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiciosSchema = new Schema({
    nombre: {
        type: String      
    },
    descripcion: {
        type: String
    },
    pathImage:{
        type: String
    }
},
{
    versionKey: false
}
);

module.exports = mongoose.model('servicios', ServiciosSchema);