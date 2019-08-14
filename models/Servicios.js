const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiciosSchema = new Schema({
    nombre: String,
    descripcion: String
},
{
    versionKey: false
}
);

module.exports = mongoose.model('servicios', ServiciosSchema);