const express = require("express")
const cors = require('cors')
const app = express()

app.use(express.json())

const index = require("./models/index") 
const ifood = require ("./routes/ifoodRoutes")

app.use("/", index)
app.use("/ifood.json", ifood)
app.use(cors())


module.exports = app
