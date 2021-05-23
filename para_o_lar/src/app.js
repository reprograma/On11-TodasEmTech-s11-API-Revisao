const express = require ("express");
cont cors = require ("cors")
const index = require ("./routes/index");
const eletronica = require("./rotes/eletronicaRotes")

const app = express()


app.use(cors())

app.use(express.json())

app.use ("/", index);
app.use("/filiais", filiais)

module.exports = app