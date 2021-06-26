const app = require('./src/app');

const PORT = 3333;

app.listen(PORT, ()=> {
    console.log(`Rodando na porta ${PORT}`);
});