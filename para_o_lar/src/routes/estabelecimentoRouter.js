const controller = require("../controllers/estabelecimentoController")
const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.filtrado)

router.post("/create", controller.createEstabelecimento)

router.patch('/:id', controller.atualizacao)

router.delete("/:id", controller.deleteLoja)

router.post("/:id/like", controller.like)
router.post("/:id/deslike", controller.deslike)

module.exports = router