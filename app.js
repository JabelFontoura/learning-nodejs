var port = 3000;
var app = require('./config/express')();

app.listen(port, function(){
	console.log("Servidor online em localhost:" + port);
});
