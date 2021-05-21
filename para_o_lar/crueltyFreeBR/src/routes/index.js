const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({
        "titulo": "cruelty free BR",
        "version": "1.0.0",
        "mensagem": "Bem Vindo! Busque a marca desejada e descubra se ela é parceira dos animais!"
    })
})







module.exports = router;