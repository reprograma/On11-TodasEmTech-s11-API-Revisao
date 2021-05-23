const express =require("express")
const cors= require("cors")
const estabelecimentos = require("./routes/estabelecimentosRoute")


const app = express()
app.use(cors())
app.use(express.json())


app.use("/estabelecimentos", estabelecimentos)


module.exports = app