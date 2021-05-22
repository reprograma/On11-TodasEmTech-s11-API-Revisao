const express = require("express")
const cors = require("cors")
const index = require("./routes/index")
const entidadesBeneficentes = require("./routes/entidadesBeneficentesRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/entidadesBeneficentes", entidadesBeneficentes)

module.exports = app