const express = require("express")
const cors = require ("cors")
const estabelecimentos = require("./routes/estabelecimentosRoutes")

const app = express ()

app.use = (cors()) // o que vem da requisição é texto livre e estou convertando no json
app.use (express.json())// o que vem da requisição é texto livre e estou convertando.

app.use("/estabelecimentos", estabelecimentos) 

module.exports = app

