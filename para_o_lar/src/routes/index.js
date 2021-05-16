const express = require("express")
const router = express.Router()

router.get("/", (request, response) =>{
    response.status(200).json({
    "mensagem": "Bem vindo ao nosso aplicativo de Estabelecimentos!!",
    "versão": "1.0.0",
    "Autora": "Ana Carolina"
    })
})

module.exports = router