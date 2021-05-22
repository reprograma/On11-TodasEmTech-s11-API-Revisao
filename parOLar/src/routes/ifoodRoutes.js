const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/ifoodControllers")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/cadastrar", controller.create)
router.delete("/:id", controller.delete)
router.put('/:id', controller.replace)
router.patch('/:id', controller.update)

router.post('/:id/like', controller.like)

module.exports = router

