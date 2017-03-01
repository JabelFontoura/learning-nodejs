var http = require('http');

var config = {
	hotsname: 'locahost',
	port: 3000,
	path: '/produtos',
	headers: { 'Accept': 'application/json'}
};

http.get(config, function(response) {
	console.log(response.statusCode);
	response.on('data', function(body) {
		console.log('' + body)
	});
});
