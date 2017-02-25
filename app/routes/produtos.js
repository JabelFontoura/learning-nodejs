module.exports = function(app){
	app.get('/produtos', function(request, response){
		var client = app.infra.connectionFactory();
		var produtosBanco = app.infra.produtosBanco(client);

			produtosBanco.lista(function(err, result) {
			    if (err) return console.error('Erro ao executar a query.', err);
			    
			    response.render('produtos/lista', {lista:result.rows});
			  });
			//client.end();
		});
	app.get('pordutos/remove', function(){
		var client = app.infra.connectionFactory();
		var produtosBanco = app.infra.produtosBanco(client);
		var produto = produtosBanco.carrega(id, callback);

		if(produto){
			produtosBanco.remove(produto, callback);
		}
	});
}