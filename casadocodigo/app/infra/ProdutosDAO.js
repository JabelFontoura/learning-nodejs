function ProdutosDAO(client) {
	this._client = client;
}

ProdutosDAO.prototype.lista = function(callback){
	this._client.query('SELECT * FROM produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
	this._client.query('INSERT INTO produtos (titulo, preco, descricao) VALUES ($1, $2, $3)', [produto.titulo, produto.preco, produto.descricao], callback);
}

module.exports = function() {
	return ProdutosDAO;
}