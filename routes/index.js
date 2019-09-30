const express = require('express');
const router = express.Router();


//Importar controladores
const tipoUsuarioController = require('../controllers/tipoUsuarioController');
const servicioController = require('../controllers/serviciosController');
const usuarioController = require('../controllers/usuariosController');
const publicacionController = require('../controllers/publicacionesController');
const authController = require('../controllers/authController');
module.exports = function(){
    //Tipo Usuario rutas
    
    router.get('/api/tipoUsuario', 
    authController.ValidarAuth,  
    tipoUsuarioController.tipoUsuarioLista);
    router.post('/api/tipoUsuario', 
    authController.ValidarAuth,
    tipoUsuarioController.crearTipoUsuario);
    router.get ('/api/tipoUsuario/:id', 
    authController.ValidarAuth,
    tipoUsuarioController.tipoUsuarioPorId);
    router.put('/api/tipoUsuario/:id', 
    authController.ValidarAuth,
    tipoUsuarioController.actualizarTipousuario);
    router.delete('/api/tipoUsuario/:id', 
    authController.ValidarAuth,
    tipoUsuarioController.eliminarTipousuario);

    //Servicios rutas
    router.get('/api/servicio', 
    
    servicioController.serviciosLista);
    router.post('/api/servicio', 
    authController.ValidarAuth,
    servicioController.crearServicio);
    router.get ('/api/servicio/:id', 
    authController.ValidarAuth,
    servicioController.servicioPorId);
    router.put('/api/servicio/:id', 
    authController.ValidarAuth,
    servicioController.actualizarServicio);
    router.delete('/api/servicio/:id', 
    authController.ValidarAuth,
    servicioController.eliminarServicio);

    //Usuario Rutas
    router.get('/api/usuario', 
    
    usuarioController.usuariosLista);
    router.post('/api/usuario', 
    usuarioController.crearUsuario);
    router.get ('/api/usuario/:id', 
     authController.ValidarAuth, 
    usuarioController.usuarioPorId);
    router.put('/api/usuario/:id', 
    authController.ValidarAuth,
    usuarioController.actualizarUsuario);
    router.delete('/api/usuario/:id', 
    authController.ValidarAuth,
    usuarioController.eliminarusuario);
    router.post('/api/autenticacion',
    authController.Autenticacion); 

    //Publicaciones rutas
    router.get('/api/publicaciones', 
    authController.ValidarAuth,
    publicacionController.publicacionesLista);
    router.post('/api/publicaciones', 
    authController.ValidarAuth,
    publicacionController.crearPublicacion);
    router.get ('/api/publicaciones/:id', 
    authController.ValidarAuth,
    publicacionController.publicacionPorId);
    router.get ('/api/publicacionesUsuario/:usuario', 
    authController.ValidarAuth,
    publicacionController.publicacionPorUsuario);
    router.put('/api/publicaciones/:id', 
    authController.ValidarAuth,
    publicacionController.actualizarPublicacion);
    router.delete('/api/publicaciones/:id', 
    authController.ValidarAuth,
    publicacionController.eliminarPublicacion);
    return router;
}   