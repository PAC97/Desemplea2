const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');
const fechaActual = moment.tz(Date.now(), "America/El_Salvador");
const ChatsSchema = new Schema({
    Emisor:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
    },
    Mensaje:{
        type: String
    },
    Receptor:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
    },
    Hora:{
        type: Date,
        default: fechaActual
    }
})

module.exports = mongoose.model('Chat', ChatsSchema);