var dbConnection = require('../infra/connectionFactory');

module.exports = function(app){
	app.get('/produtos', function(request, response){
		var client = dbConnection();

			client.query('SELECT * FROM livros', function(err, result) {
			    if (err) return console.error('Erro ao executar a query.', err);
			    
			    response.render('produtos/lista', {lista:result.rows});
			  });

			//client.end();

		});
}