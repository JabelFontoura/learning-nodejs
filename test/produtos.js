var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {
	//Biblioteca para limpar talbelas, node-database-cleaner

/*	Executa antes de cada função it

	beforeEach(function(done) {
		var client = express.infra.connectionFactory();
		clent.query("DELETE FROM produtos", functtion(error, result) {
			if(!error){
				done();
			}
		});
	});*/

	it('#listagem json', function(done) {
		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, done);
	});

	it('#listagem html', function(done) {
		request.get('/produtos')
		.set('Accept', 'text/html')
		.expect('Content-Type', /text\/html/)
		.expect(200, done);
	});

	it('#cadastro de novo produto dados invalidos', function(done) {
		request.post('/produtos')
		.send({
			titulo: "", 
			descricao: "novo livro"
		})
		.expect(400, done);
	});

	it('#cadastro de novos produto com dados validos', function(done) {
		request.post('/produtos')
		.send({
			titulo: "Titulo",
			descricao: "Novo livro",
			preco: 20.50
		})
		.expect(302, done);
	});
});