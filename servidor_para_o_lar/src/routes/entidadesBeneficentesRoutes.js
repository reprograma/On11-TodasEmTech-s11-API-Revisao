const controller = require("../controllers/entidadesBeneficentesControllers")
const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.create)
router.post("/:id/like", controller.like) 

router.put("/:id", controller.replace)

router.patch("/:id", controller.update)

router.delete("/:id", controller.remove)


module.exports = router 