const Chat = require('../models/Chat');

exports.ChatLista = async (req, res) => {
    await Chat.find({Emisor : req.params.id})
    .populate('Emisor')
    .populate('Receptor')
    .exec((err, Chat) => {
      if(err) res.status(500).json({mensaje: 'Ocurrio un error'})
      if(!Chat){
        res.status(403).json({mensaje: 'Lista Vacia'})
      }
      res.status(200).json({status: 'Success', Chat: Chat})
    })
  }