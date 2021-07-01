const express = require("express")

const cors = require("cors")

const estabelecimento = require("./routes/estabelecimentosRoutes")

const app = express()

app.use(cors())

app.use("/estabelecimentos", estabelecimentos)






module.exports = app

