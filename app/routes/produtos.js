module.exports = function(app){
	var listaProdutos = function(request, response){
		var client = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(client);

			produtosDAO.lista(function(error, result) {
				response.format({
					html: function() {
			    		response.render('produtos/lista', {lista:result.rows});
					},
					json: function() {
						response.json(result.rows);
					}
				});
			  });
			//client.end();
		}

	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(request, response) {
		response.render('produtos/form', {validationErrors:{}, produto:{}});
	});

	app.post('/produtos', function(request, response) {
		var produto = request.body;

		request.assert('titulo', 'O campo título é obrigatório.').notEmpty();
		request.assert('preco', 'Digito inválido.').isFloat();

		var errors = request.validationErrors();

		if(errors){
				response.format({
					html: function() {
						response.status(400).render('produtos/form', {validationErrors:errors, produto:produto});
					},
					json: function() {
						response.status(400).json(errors);
					}
				});
			console.log(errors);
			return;
		}

		var client = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(client);

		produtosDAO.salva(produto, function(error, result) {
			response.redirect('/produtos');
		});
	});
}