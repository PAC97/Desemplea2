const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SalasSchema = new Schema({
    chat:{
        type: Schema.Types.ObjectId,
        ref: 'Chat',
    }
})

module.exports = mongoose.model('Salas', SalasSchema )
