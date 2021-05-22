const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        "Title": "API Estabelecimentos",
        "Version": "1.0.0",
        "Message": "Encontre o estabelecimento saudável e que atende as suas necessidades"   
    })   
})
module.exports = router 