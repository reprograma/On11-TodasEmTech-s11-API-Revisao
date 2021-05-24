const express = require("express");
const router = express.Router();
const controller = require("../controllers/drugstoreController")

router.post("/add", controller.addStore);

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.delete("/:id", controller.deleteStore);

router.put("/:id", controller.replaceStore);

router.patch("/:id", controller.updateStore)

module.exports = router;