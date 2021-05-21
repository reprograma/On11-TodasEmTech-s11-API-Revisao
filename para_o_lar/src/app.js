const express = require("express") //chama o express
const cors = require("cors") //chama o cors
const estabelecimentos = require("./routes/estabelecimentosRoutes") //chamando as rotas

const app = express() //executa o express

app.use(express.json()) //o que vem da requisição é texto livre, aqui converte para json
app.use(cors())
app.use('/estabelecimentos', estabelecimentos) //definindo a rota raiz

module.exports = app
