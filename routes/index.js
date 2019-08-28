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
     
    tipoUsuarioController.tipoUsuarioLista);
    router.post('/api/tipoUsuario', 
    
    tipoUsuarioController.crearTipoUsuario);
    router.get ('/api/tipoUsuario/:id', 
    
    tipoUsuarioController.tipoUsuarioPorId);
    router.put('/api/tipoUsuario/:id', 
    
    tipoUsuarioController.actualizarTipousuario);
    router.delete('/api/tipoUsuario/:id', 
    
    tipoUsuarioController.eliminarTipousuario);

    //Servicios rutas
    router.get('/api/servicio', 
    
    servicioController.serviciosLista);
    router.post('/api/servicio', 
    
    servicioController.crearServicio);
    router.get ('/api/servicio/:id', 
    
    servicioController.servicioPorId);
    router.put('/api/servicio/:id', 
    
    servicioController.actualizarServicio);
    router.delete('/api/servicio/:id', 
    
    servicioController.eliminarServicio);

    //Usuario Rutas
    router.get('/api/usuario', 
    
    usuarioController.usuariosLista);
    router.post('/api/usuario', 
    
    usuarioController.crearUsuario);
    router.get ('/api/usuario/:id', 
    
    usuarioController.usuarioPorId);
    router.put('/api/usuario/:id', 
    
    usuarioController.actualizarUsuario);
    router.delete('/api/usuario/:id', 
    
    usuarioController.eliminarusuario);
    router.post('/api/autenticacion',
    authController.Autenticacion); 

    //Publicaciones rutas
    router.get('/api/publicaciones', 
    
    publicacionController.publicacionesLista);
    router.post('/api/publicaciones', 
    
    publicacionController.crearPublicacion);
    router.get ('/api/publicaciones/:id', 
    
    publicacionController.publicacionPorId);
    router.put('/api/publicaciones/:id', 
    
    publicacionController.actualizarPublicacion);
    router.delete('/api/publicaciones/:id', 
    
    publicacionController.eliminarPublicacion);
    return router;
}   