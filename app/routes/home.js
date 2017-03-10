module.exports = function(app) {
	app.get('/', function(request, response) {
		var client = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(client);

		produtosDAO.lista(function(error, result) {
			response.render('home/index', {livros:result.rows});
		});
	});
}