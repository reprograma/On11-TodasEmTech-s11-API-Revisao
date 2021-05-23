const app = require("./src/app")

const PORT = 8080

app.listen(PORT, ()=>{
   console.log(`o server stá rodando na porta ${PORT}`)
})