const express = require("express")
const cors = require("cors")
const estabelecimentos = require('./routes/estabelecimentosRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/estabelicimentos', estabelecimentos)

module.exports = app