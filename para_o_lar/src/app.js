const express = require('express')

const cors = require('cors')

const mochilas = require('./routes/mochilasRoutes')


const app = express()

app.use(express.json()) // o que vem da requisição é texto livre e estou convertendo no json

app.use(cors())

app.use('/mochilas', mochilas)

module.exports = app
