const express = require("express");
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "Titulo": "API de Cadastramento de Entidades Beneficientes que necessitam de doações",
        "Version": "1.0.0",
        "Mensagem": "Seja Bem-vindo ao Cadastramento de Entidades Beneficientes, salve uma vida"    
    })   
})

module.exports = router