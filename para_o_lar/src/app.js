const express = require('express')

const cors = require('cors')

const estabelecimentos = require('./routes/estabelecimentosRoutes')


const app = express()

app.use(express.json()) // o que vem da requisição é texto livre e estou convertendo no json

app.use(cors())

app.use('/estabelecimentos', estabelecimentos)

module.exports = app
