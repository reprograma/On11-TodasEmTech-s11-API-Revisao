const express = require('express') //chama o express
const controller = require('../controllers/estabelecimentosControllers') //chama o controller
const router = express.Router() //executa o Router

//configurando a continuação das rotas e informando qual função irá usar do controller
router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.create)
router.put("/substituir/:id", controller.replace)
router.patch("/atualizar/:id", controller.update)
router.delete("/remover/:id", controller.remove)

router.post('/:id/like', controller.like)

module.exports = router