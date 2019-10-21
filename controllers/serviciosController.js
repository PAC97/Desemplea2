const Servicios = require('../models/Servicios');
const chalk = require('chalk');

exports.serviciosLista = async (req, res) => {
    const servicios = await Servicios.find();
    res.json({servicios});
    
}

exports.crearServicio = async (req, res) => {
    const servicio = await new Servicios()
    servicio.nombre = req.body.nombre
    servicio.descripcion = req.body.descripcion
    

    servicio.save((err, servicio) =>{
        if(err) res.status(500).json({mensaje: `Error al insertar Servicio: ${err}`})

        res.status(200).json({status: 'Success', servicio: servicio})
    })
}

exports.servicioPorId = async (req, res) => {
    const id = req.params.id;
    await Servicios.findById(id, (err, servicio)=>{
        if(err) res.status(500).json({mensaje: `Error al realizar la peticion: ${err}`})
        if(!servicio) res.status(404).json({mensaje: 'No se encuentra ese dato'})
        else{
            res.status(200).json({servicio : servicio})
         
        }
    });
}

exports.actualizarServicio = async (req, res) => {
    const id = req.params.id;
    const {nombre, descripcion} = req.body;
    const servicio = await Servicios.findByIdAndUpdate(id, {$set: {
        nombre,
        descripcion
    }}, {new : true}, function(err, servicio){
        if(err){
            
            res.json({mensaje: 'error'})
        }
        
        res.json({status:'Success', mensaje:'Servicio actualizado'});
    });
}

exports.eliminarServicio = async (req, res) => {
    const id = req.params.id;
    
    await Servicios.findByIdAndRemove(id, (err, servicio)=>{
        if(err) {
            throw err;
        }
        if(!servicio) res.status(404).json({mensaje:'No se encuentra ese dato'})
        res.json({status:'Success', mensaje:'Servicio eliminado'});
    })
}