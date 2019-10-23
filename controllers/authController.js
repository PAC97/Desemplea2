const Usuarios = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
require('dotenv').config({path: '../variables.env'});

exports.Autenticacion = async (req, res, next) => {
    Usuarios.findOne({Correo:req.body.Correo})
    .populate('ID_TipoUsuario')
    .exec(function(err, Usuario){
        if(err){
            next(err);
        }else{
            if(bcrypt.compareSync(req.body.Password, Usuario.Password)){
                
                const token = jwt.sign({id: Usuario._id,}, req.app.get(process.env.SECRETO),
                {expiresIn: '1h'});
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const buff = new Buffer.from(base64, 'base64');
                const payloadinit = buff.toString('ascii');
                const payload = JSON.parse(payloadinit);
                res.json({status:'Success', mensaje:'Usuario encontrado', data:{Usuario: Usuario._id, Estado: Usuario.Estado, Rol: Usuario.ID_TipoUsuario, token:token, payload: payload, Servicios: Usuario.Servicios}});
            }else{
                res.json({status:'error', mensaje:'Credenciales invalidas', data: null})
            }
        }
    });
}

exports.ValidarAuth = async (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), (err, decoded)=>{
        if(err){
            res.json({status: 'error', mensaje:'no tienes autorizacion', data: null});
        }else{
            req.body.UsuarioId = decoded.id;
            next(); 
        }
    })
}