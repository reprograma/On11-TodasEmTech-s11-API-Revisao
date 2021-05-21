const express = require('express')
const cors = require('cors')
const estabelecimentos = require('./routes/estabelecimentosRoutes')

const app = express()

app.use(express.json()) 
app.use(cors())

app.use('/estabelecimentos', estabelecimentos)

module.exports = app