const express = require("express")
const router = express.Router()

const controller = require("../controller/controllersLocais")

router.post("/criar", controller.create)

router.get("/todos", controller.getAll)

router.delete("/:id", controller.deleteLocal)

router.put("/:id", controller.replaceLocal)

router.patch("/:id", controller.updateLocal)

module.exports = router 