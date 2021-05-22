const express = require("express")
const cors = require("cors")
const locais = require("./route/routesLocais")
const index = require("./route/index")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/locais", locais)

module.exports = app 