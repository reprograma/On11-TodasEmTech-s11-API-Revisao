const app = require("./src/app")

const PORT = 8080;

app.listen (PORT, () =>{
    console.log(`App is running on ${PORT} port.`)
} );