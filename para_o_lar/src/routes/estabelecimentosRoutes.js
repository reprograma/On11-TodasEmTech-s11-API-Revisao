const express = require("express")
const router = express.Router()
const controller = require("../controllers/estabelecimentosControllers")

router.post("/", controller.createShop)

router.get("/",controller.getAll)

module.exports = router