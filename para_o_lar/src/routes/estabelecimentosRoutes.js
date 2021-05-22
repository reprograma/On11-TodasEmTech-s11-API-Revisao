const controller = require("../controllers/estabelecimentosControllers")

const express = require("express")
//const { routes } = require("../app")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

router.post("/create", controller.createEstabelecimento)

router.put("/:id", controller.replaceEstabelecimento)

router.patch("/updateNome", controller.updateNome)

router.delete("/:id", controller.remove)


module.exports = router

