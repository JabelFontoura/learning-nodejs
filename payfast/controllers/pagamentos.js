module.exports = (app) => {
    app.get('/pagamentos', (request, response) => {
        response.send('Ok');
    });

    app.post('/pagamentos/pagamento', (request, response) => {
        const pagamento = request.body;

        console.log('Processando requisição de um novo pagamento');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date();
        response.send(pagamento);
    });
};
