var http = require('http');

describe('#ProdutosController', function(){
	it('#listagem json', function(done){
		var config = {
			hostaname: 'localhost',
			port: 3000,
			path:'/produtos',
			headers: {
				'Accept': 'application/json'
			}
		};

		http.get(config, function(response) {
			if(response.statusCode == 200){
				console.log("Status Ok");
			}
			if(response.headers['content-type'] == 'application/json; charset=utf-8'){
				console.log("Content-type Ok ");
			}
			done();
		});
	});
});