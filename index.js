const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

const routes = require('./routes'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

require('dotenv').config({path: 'variables.env'});

require('./config/db');
app.set('port', process.env.PORT || process.env.PUERTO)

require('./controllers/mensajesController')(io);

//Configuraciones
app.set(process.env.SECRETO, process.env.KEY)
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
       res.status(500).json({message: "Ocurrio un error :( !!!"});
});

server.listen(app.get('port'), ()=>{
  console.log('Servidor corriendo en puerto', app.get('port'))
})

