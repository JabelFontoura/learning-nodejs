module.exports = function(app){
	var listaProdutos = function(request, response){
		var client = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(client);

			produtosDAO.lista(function(error, result) {
			    response.render('produtos/lista', {lista:result.rows});
			  });
			//client.end();
		}

	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(request, response) {
		response.render('produtos/form');
	});

	app.post('/produtos', function(request, response) {
		var produto = request.body;
		var client = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(client);

		produtosDAO.salva(produto, function(error, result) {
			response.redirect('/produtos');
		});
	});
}