const controller = require('../controllers/estabelecimentosControllers')

const express = require('express')

const router = express.Router()

router.post('/criar', controller.create)
router.get('/todos', controller.getAll)
router.get('/:id', controller.get)
router.delete('/:id', controller.remove)
router.put('/:id', controller.replace)
router.patch('/:id', controller.update)

module.exports = router