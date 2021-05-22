const express = require("express")
const router = express.Router()

router.get("/", (request,response)=>{
    response.status(200).json({
        "titulo": "Endereço UBS",
        "version": "1.0.0", 
        "mensagem":"api com a localização das UBS para agendamento do imunizante contra a covid-19 no município de Parauapebas - PA"
    })
})

module.exports = router