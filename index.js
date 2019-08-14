const express = require('express');
const routes = require('./routes'); 
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
/* const passport = require('./config/passport'); */

//Conexion a base de datos
const db = require('./config/db');
const app = express();

//Configuraciones

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

//Importar modelos de datos
app.use('/', routes());
app.listen(3000);
