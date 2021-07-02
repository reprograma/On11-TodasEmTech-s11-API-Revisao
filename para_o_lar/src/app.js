const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors())

app.use(express.json())

const estabelecimento = require("./routes/estabelecimentosRoutes")

app.use("/estabelecimentos",estabelecimento)







module.exports = app

