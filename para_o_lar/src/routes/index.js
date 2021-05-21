const express = require("express");
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "Titulo": "API de Cadastramento de Estabelecimento para Atendimento Animal na Cidade",
        "Version": "1.0.0",
        "Mensagem": "Seja Bem-vindo para Cadastrar o Estabelecimento"    
    })   
})

module.exports = router