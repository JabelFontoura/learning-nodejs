const app = require('./config/custom-express')();

app.listen(3000, () => {
    console.log('Servidor online em localhost:3000');
});
