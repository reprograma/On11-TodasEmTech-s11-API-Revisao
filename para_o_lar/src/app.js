const local = require("./model/models")
const express = require ("express")
const cors = require("cors")

const app = express()

app.use("/locais", locais)
app.use(express.json())
app.use(cors())


module.exports = app 


