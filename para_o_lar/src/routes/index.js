const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({
        "name": "para_o_lar",
        "version": "1.0.0",
        "description": "",
        "mensage": "Welcome!",
    })
});

module.exports = router;