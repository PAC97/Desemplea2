const Chat = require('../models/Chat');

module.exports = (io) =>{ 
    io.on('connection', socket => {
        console.log('Nueva conexion');
      
        socket.on('nuevo-mensaje', (mensaje) => {
            console.log(mensaje);
          });
        socket.on('nuevo-mensaje', (mensaje, emisor, receptor) => {
            io.emit('nuevo-mensaje',{
              emisor: emisor,
              mensaje: mensaje,
              receptor: receptor
            });   
            const chats = new Chat({Emisor: emisor, Mensaje: mensaje, Receptor: receptor});
            chats.save();   
          });
      }); 
}

