const express = require("express")
const cors = require("cors")
const locais = require("./routes/routesLocais")
const index = require("./routes/index")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/locais", locais)

module.exports = app  
