module.exports = function(app) {
	app.get('/promocoes/form', function(request, response) {
		var client = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(client);

		produtosDAO.lista(function(error, result) {
			response.render('promocoes/form', {lista:result.rows});
		});
	});

	app.post('/promocoes', function(request, response) {
		var promocao = request.body;
		app.get('io').emit('novaPromocao', promocao);
		response.redirect('promocoes/form');
	});
}