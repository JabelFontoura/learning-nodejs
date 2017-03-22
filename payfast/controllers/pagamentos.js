module.exports = (app) => {
    app.get('/pagamentos', (request, response) => {
        response.send('Ok');
    });

    app.post('/pagamentos/pagamento', (request, response) => {
        const pagamento = request.body;
        console.log(pagamento);
        response.send('OkKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
    });
};
