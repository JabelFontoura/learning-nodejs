module.exports = function(app){
	app.get('/produtos', function(request, response){
		var pg = require('pg');
		var conStrig = "postgres://postgres:jabel@localhost/CasaDoCodigo";

		pg.connect(conStrig, function(err, client, done){
			if(err){
				return console.error("Error fetching client from pool", err);
			}
			console.log("Conctado com o banco");
			client.query('SELECT * FROM livros', function(err, result) {
			    done();
			    if (err) {
			      return console.error('Error running query', err);
			    }
			    response.send(result.rows);
			  });

		});
	});
}