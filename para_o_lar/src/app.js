const express = require("express")
const estabelecimento = require("./routes/estabelecimentoRouter")

const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors())

app.use("/estabelecimento", estabelecimento)

module.exports = app