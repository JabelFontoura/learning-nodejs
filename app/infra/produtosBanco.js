module.exports = function() {
	return function (client){
		this.lista = function(callback) {
			client.query('SELECT * FROM livros', callback);
		}
		return this;
	}
}