const pg = require('pg');

function createDBConnection() {
	const connection = "postgres://postgres:jabel@localhost/CasaDoCodigo";
	const client = new pg.Client(connection);
	client.connect();

	return client;
}

module.exports = function() {
	return createDBConnection;
}