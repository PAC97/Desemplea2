const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.connect('mongodb://localhost:27017/desemplea2', {
    useCreateIndex: true,    
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log(chalk.bgGreen.black.bold('Base de datos conectada')))
.catch(err => console.error(chalk.bgRed.black.bold(err)));
