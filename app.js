var port = 3000;
var app = require('./config/express')();
var rotasProdtuos = require('./app/routes/produtos')(app);

app.listen(port, function(){
	console.log("Servidor online em localhost:" + port);
});
