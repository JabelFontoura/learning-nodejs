module.exports = function(app){
	app.get('/produtos', function(request, response){
		var pg = require('pg');
		var connection = 
		response.render("produtos/lista");
	});
}