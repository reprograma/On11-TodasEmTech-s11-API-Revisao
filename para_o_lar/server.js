const app = require("./src/app") //requerir o arquivo app, que tem a centralização das rotas
const PORT = 4040

app.listen(PORT, (request, response)=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})