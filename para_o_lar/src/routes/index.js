const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "Estabelecimentos"
        "version": "1.0.0"
        "mensagem": "bem-vind@!"
    })
})

module.exports = router