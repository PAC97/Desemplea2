const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe('Insertar tipo de usuario: ', ()=>{
    it('Insertatste un tipo de usuario', (done) =>{
        chai.request(url)
        .post('/tipoUsuario')
        .json({nombre: 'Test', descripcion: 'Tipo Usuario de prueba'})
        .end(function(err, res){
            if(err){
                expect(res).to.have.status(500);
            }
            else{
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            }
            
        });
    });
});
describe('Obtener todos los Tipos de usuario: ', ()=>{
    it('Obtuviste todos los tipos de usuario en la BD', (done) =>{
        chai.request(url)
        .get('/tipoUsuario')
        .end(function(err, res){
            if(err){
                expect(res).to.have.status(500);
            }
            else{
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            }
        });
    });
});
const id = '5d538a39dc3c062d5cc7361b';
describe('Obtener tipo de usuario con el id: '+ id, ()=>{
    it('Obtuviste el tipo de usuario con el id:' + id, (done) =>{
        chai.request(url)
        .get(`/tipoUsuario/${id}`)
        .end(function(err, res){
            if(err){
                expect(res).to.have.status(500);
            }
            else{
                console.log(res.body)
                expect(res.body).to.have.property('_id').to.be.equal(id);
                expect(res).to.have.status(200);
                done();
            }
            
        });
    });
});

describe('Actualizar tipo de usuario  con el id: '+ id, ()=>{
    it('Se actualizo el tipo de usuario con el id: '+ id, (done) =>{
        chai.request(url)
        .put(`/tipoUsuario/${id}`)
        .json({nombre: 'test1', descripcion:'test'})
        .end(function(err, res){
            if(err){
                expect(res).to.have.status(500);
            }
            else{
                console.log(res.body)
                expect(res.body).to.have.property('_id').to.be.equal(id);
                expect(res).to.have.status(200);
                done();
            }
        });
    });
});

describe('Eliminar tipo de usuario con el id: '+ id,()=>{

	it('Se elimino el tipo de usuario con el id: '+ id, (done) => {
		chai.request(url)
            .delete(`/tipoUsuario/${id}`)
            .end(function (err, res){
                console.log(body)
                expect(res.body).to.have.property('_id').to.be.equal(id);
                expect(res).to.have.status(200);
                chai.request(url)
                .get('/tipoUsuario')
                .end(function(err, res){
                    console.log(res.body)
                    expect(res).to.have.status(200);
                })
            });
			
	});

});