const express = require("express")
const cors = require("cors")
const index = require("./routes/index")
const petshop = require("./routes/petshopRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/petshop", petshop)

module.exports = app