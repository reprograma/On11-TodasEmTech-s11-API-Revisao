const express = require("express")
const router = express.Router()

router.get("/", (request,response)=>{
    response.status(200).json({
        "titulo": "Endereço Local",
        "version": "1.0.0", 
        "mensagem":"api com a localização da consulta"
    })
})

module.exports = router 