const controller = require("../controllers/marcasControllers")

const express = require("express");
const router = express.Router();




router.get("/", controller.getAll)

router.get("/nome", controller.getByName)
router.get("/veganas", controller.getVegans)
router.get("/opcoesVeganas", controller.getVegansOptions)
router.get("/crueltyFree", controller.getCrueltyFree)
router.get("/crueltyFreeAndVegan", controller.getCrueltyFreeAndVegan)
router.post("/add", controller.add)
router.delete("/nome", controller.deleteByName)
router.put("/title", controller.replaceByTitle)
router.patch("/title", controller.updateByTitle)
router.delete("/:id", controller.deleteById)
router.get("/:id", controller.getById)
router.put("/:id", controller.replaceById)
router.patch("/:id", controller.updateById)










module.exports = router