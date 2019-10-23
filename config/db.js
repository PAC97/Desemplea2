const mongoose = require('mongoose');
const moment = require('moment-timezone');
const chalk = require('chalk');
require('dotenv').config({path: '../variables.env'});
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,    
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log(chalk.bgGreen.black.bold('Base de datos conectada')), console.log(moment.tz( "America/El_Salvador").format('LLL')))
.catch(err => console.error(chalk.bgRed.black.bold(err)));
