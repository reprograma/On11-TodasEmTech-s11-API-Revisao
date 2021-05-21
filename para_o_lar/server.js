const app = require("./src/app")
const PORT = 8080 

app.listen(PORT, ()=>{
    console.log(`App rodando no endereço http://localhost:${PORT}`)
})