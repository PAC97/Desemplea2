const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config({path: '../variables.env'});
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,    
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log(chalk.bgGreen.black.bold('Base de datos conectada')))
.catch(err => console.error(chalk.bgRed.black.bold(err)));
