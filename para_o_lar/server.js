const app = require('./src/app')

const PORT = 7171 

app.listen(PORT, ()=>{
    console.log(`Servidor cantando e rodando na porta ${PORT}`);
})