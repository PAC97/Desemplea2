const mongoose = require('mongoose');
const moment = require('moment-timezone');
const chalk = require('chalk');
mongoose.connect('mongodb://localhost:27017/desemplea2', {
    useCreateIndex: true,    
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log(chalk.bgGreen.black.bold('Base de datos conectada')), console.log(moment.tz( "America/El_Salvador").format('LLL')))
.catch(err => console.error(chalk.bgRed.black.bold(err)));
