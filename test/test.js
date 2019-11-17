const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://desempla2.herokuapp.com/api';

describe('Insertar servicio: ', ()=>{
    it('Insertatste un servicio', (done) =>{
        chai.request(url)
        .post('/servicio')
        .json({nombre: 'Test', descripcion: 'Servicio de prueba'})
        .end(function(err, res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    });
});
describe('Obtener todos los servicios: ', ()=>{
    it('Obtuviste todos los servicios en la BD', (done) =>{
        chai.request(url)
        .get('/servicio')
        .end(function(err, res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    });
});
const id = '5d52f090fad5fa23b45c6f1c';
describe('Obtener servicio con el id: '+ id, ()=>{
    it('Obtuviste el sevicio con el id:' + id, (done) =>{
        chai.request(url)
        .get(`/servicio/${id}`)
        .end(function(err, res){
            console.log(res.body)
            expect(res.body).to.have.property('_id').to.be.equal(id);
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Actualizar servicio con el id: '+ id, ()=>{
    it('Se actualizo el servicio con el id: '+ id, (done) =>{
        chai.request(url)
        .put(`/servicio/${id}`)
        .json({nombre: 'test1', descripcion:'test'})
        .end(function(err, res){
            console.log(res.body)
            expect(res.body).to.have.property('_id').to.be.equal(id);
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Eliminar servicio con el id: '+ id,()=>{

	it('Se elimino el servicio con el id: '+ id, (done) => {
		chai.request(url)
            .delete(`/servicio/${id}`)
            .end(function (err, res){
                console.log(body)
                expect(res.body).to.have.property('_id').to.be.equal(id);
                expect(res).to.have.status(200);
                chai.request(url)
                .get('/servicio')
                .end(function(err, res){
                    console.log(res.body)
                    expect(res).to.have.status(200);
                })
            });
			
	});

});