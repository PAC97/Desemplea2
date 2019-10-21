const express = require('express');
const app = express();
const routes = require('./routes'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const Mensajes = require('./models/Mensajes');
app.set('port', process.env.PORT || 3000)

app.set('server', app.listen(app.get('port'), ()=>{
  console.log('Servidor en puerto', app.get('port'));
}));

const db = require('./config/db');

const socketIO = require('socket.io');
const io = socketIO(app.get('server'));

io.on('connection', (socket) => {
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
      const mensajes = new Mensajes({Emisor: emisor, Mensaje: mensaje, Receptor: receptor});
      mensajes.save();   
    });
}); 
//Conexion a base de datos



//Configuraciones
app.set('secretKey', 'nodeRestApi')
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(bodyParser.json());

//Importar modelos de datos

app.use('/', routes());

app.use((err, req, res, next) =>{
    console.log(err);
    
     if(err.status === 404)
      res.status(404).json({message: "No encontrado"});
     else 
       res.status(500).json({message: "Ocurrio un error :( !!!"});});




