const Usuarios = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');

exports.Autenticacion = async (req, res, next) => {
    Usuarios.findOne({Correo:req.body.Correo}, function(err, Usuario){
        if(err){
            next(err);
        }else{
            if(bcrypt.compareSync(req.body.Password, Usuario.Password)){
                console.log(chalk.inverse(req.body.Password, Usuario.Password));
                const token = jwt.sign({id: Usuario._id}, req.app.get('secretKey'),
                {expiresIn: '1h'});
                res.json({status:'Success', mensaje:'Usuario encontrado', data:{Usuario: Usuario, token:token}});
            }else{
                res.json({status:'error', mensaje:'Credenciales invalidas', data: null})
            }
        }
    });
}

exports.ValidarAuth = async (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), (err, decoded)=>{
        if(err){
            res.json({status: 'error', mensaje:err.mensaje, data: null});
        }else{
            req.body.UsuarioId = decoded.id;
            next(); 
        }
    })
}