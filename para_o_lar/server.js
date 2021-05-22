const app = require ("./src/app")

const PORT = 8080

app.listen(PORT, ()=> {
    console.log(`Exercício da semana 11 rodando na porta ${PORT}`);
})