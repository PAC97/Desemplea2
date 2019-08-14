const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe('Insertar servicio: ', ()=>{
    it('Insertatste un servicio', (done) =>{
        chai.request(url)
        .post('/servicio')
        .send({nombre: 'Test', descripcion: 'Servicio de prueba'})
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
const id = '5d52ef7f659aed2178923044';
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
        .send({nombre: 'test1', descripcion:'test'})
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