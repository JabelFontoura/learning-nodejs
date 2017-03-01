var http = require('http');

var config = {
	hotsname: 'locahost',
	port: 3000,
	path: '/produtos',
	method: 'post',
	headers: { 
		'Accept': 'application/json',
		'Content-type' : 'application/json'
	}
};

var client = http.request(config, function(response) {
	console.log(response.statusCode);
	response.on('data', function(body) {
		console.log('' + body)
	});
});

var produto = {

};

client.end(JSON.stringfy(produto));
