const app = require("./src/app")

const PORT = 3070

const db = require("./src/data/database")
db.connect()

app.listen(PORT,()=>{
    console.log(`Rodando na porta ${PORT}.`)
})