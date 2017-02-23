const pg = require('pg');
module.exports = function() {
	const connection = "postgres://postgres:jabel@localhost/CasaDoCodigo";
	const client = new pg.Client(connection);
	client.connect();

	return client;
};