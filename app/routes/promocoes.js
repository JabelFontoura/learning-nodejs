module.exports = function(app) {
	app.get('/promocoes/form', function(request, response) {
		var client = app.infra.connectionFacoty();
		var produtosDAO = new app.infra.ProdutosDAO(client);

		produtosDAO.lista(function(error, result) {
			response.render('/promocoes', {lista:result.rows});
		});
	});
}