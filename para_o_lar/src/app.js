const express = require("express")
const app = express()

app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const estabelecimentos = require("./routes/estabelecimentosRoutes")

app.use("/", index)
app.use("/estabelecimentos", estabelecimentos)

module.exports = app