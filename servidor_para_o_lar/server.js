const app = require('./src/app')

const PORT = 8080

app.listen(PORT, ()=> {
    console.log(`Ajude cadastrando uma entidade que cuida dos nossos velhinhos ou crianças, sua indicação e doação salva vidas ${PORT}`)
})