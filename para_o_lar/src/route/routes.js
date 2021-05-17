const controller = require("../controller/controllers")
const express = require("express")
const router = express.Router()


router.post("/criar", controller.create)

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

router.put("/:id", controller.replace)
router.patch(":id", controller.update)

router.delete("/:id", controller.remove)


module.exports = router
