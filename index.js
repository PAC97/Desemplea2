const express = require('express');
const routes = require('./routes'); 
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const logger = require('morgan');
/* const passport = require('./config/passport'); */

//Conexion a base de datos
const db = require('./config/db');
const app = express();

//Configuraciones
app.set('secretKey', 'nodeRestApi')
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

//Importar modelos de datos
app.use('/', routes());

app.use(function(err, req, res, next) {
    console.log(err);
    
     if(err.status === 404)
      res.status(404).json({message: "Not found"});
     else 
       res.status(500).json({message: "Something looks wrong :( !!!"});});
app.listen(3000);
