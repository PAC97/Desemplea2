const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';
const Usuario = '5d4e41a0973dd21aa8c192a8';
const ID_Servicio = '5d50dad2a22ea924c060bdbf';
describe('Insertar publicacion: ', ()=>{
    it('Insertatste publicacion', (done) =>{
        chai.request(url)
        .post('/publicaciones')
        .json({Titulo: 'Test', Descripcion: 'Atest', Usuario: Usuario })
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
describe('Obtener todos las publicaciones: ', ()=>{
    it('Obtuviste todas las publicaciones en la BD', (done) =>{
        chai.request(url)
        .get('/publicaciones')
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
const id = '5d53880e5b7e7c3a94418ab2';
describe('Obtener publicacion con el id: '+ id, ()=>{
    it('Obtuviste la publicacion con el id:' + id, (done) =>{
        chai.request(url)
        .get(`/publicaciones/${id}`)
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

describe('Actualizar publicacion  con el id: '+ id, ()=>{
    it('Se actualizo la publicacion con el id: '+ id, (done) =>{
        chai.request(url)
        .put(`/publicaciones/${id}`)
        .json({Titulo: 'Test', Descripcion: 'Atest', Usuario: Usuario})
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

describe('Eliminar publicacion con el id: '+ id,()=>{

	it('Se elimino la publicacion con el id: '+ id, (done) => {
		chai.request(url)
            .delete(`/publicaciones/${id}`)
            .end(function (err, res){
                console.log(body)
                expect(res.body).to.have.property('_id').to.be.equal(id);
                expect(res).to.have.status(200);
                chai.request(url)
                .get('/usuario')
                .end(function(err, res){
                    console.log(res.body)
                    expect(res).to.have.status(200);
                })
            });
			
	});

});