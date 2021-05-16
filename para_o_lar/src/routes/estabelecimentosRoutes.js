const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")


router.post("/criar", controller.create)

router.get("/todos", controller.getAll)
router.get("/:id", controller.get)

router.delete("/:id", controller.remove)

router.put("/:id", controller.update)

router.patch("/:id", controller.replace)

module.exports = router