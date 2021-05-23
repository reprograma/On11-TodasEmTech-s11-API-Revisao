const express = require('express')

const cors = require('cors')

const franquias = require('./routes/franquiasLojasRouter')

const app = express()

app.use(express.json()) // o que vem da requisição é texto livre e estou convertendo no json

app.use(cors())

app.use('/franquias', franquias)

module.exports = app
