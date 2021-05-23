const controller = require("../controller/estabelecimentosController")
const express = require("express")
const router = express.Router()



router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.delete("/:id", controller.remove)
router.post("/criar", controller.create)
router.patch("/id:", controller.updateAdress)
router.put("/id:", controller.replaceCadastro)


module.exports = router
