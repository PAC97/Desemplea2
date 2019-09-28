const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';
const ID_TipoUsuario = '5d4af885801db142982a8e9e';
const ID_Servicio = '5d50dad2a22ea924c060bdbf';
describe('Insertar usuario: ', ()=>{
    it('Insertatste usuario', (done) =>{
        chai.request(url)
        .post('/usuario')
        .json({Nombres: 'Test', Apellidos: 'Atest', Edad: '22', Telefono: '77788', Direccion:'test', Correo: 'test@test.com', ID_TipoUsuario: ID_TipoUsuario, ID_Servicio: ID_Servicio})
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
describe('Obtener todos los usuario: ', ()=>{
    it('Obtuviste todos los usuario en la BD', (done) =>{
        chai.request(url)
        .get('/usuario')
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
const id = '5d531eafeec15e1754bfd275';
describe('Obtener usuario con el id: '+ id, ()=>{
    it('Obtuviste el usuario con el id:' + id, (done) =>{
        chai.request(url)
        .get(`/usuario/${id}`)
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

describe('Actualizar usuario  con el id: '+ id, ()=>{
    it('Se actualizo el usuario con el id: '+ id, (done) =>{
        chai.request(url)
        .put(`/usuario/${id}`)
        .json({Nombres: 'Test1', Apellidos: 'Atest1', Edad: '22', Telefono: '77788', Direccion:'test', Correo: 'test@test.com', ID_TipoUsuario: ID_TipoUsuario, ID_Servicio: ID_Servicio})
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

describe('Eliminar usuario con el id: '+ id,()=>{

	it('Se elimino el usuario con el id: '+ id, (done) => {
		chai.request(url)
            .delete(`/usuario/${id}`)
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