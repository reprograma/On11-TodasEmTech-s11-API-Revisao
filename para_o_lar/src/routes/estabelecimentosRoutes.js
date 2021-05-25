const controller = require('../controllers/estabelecimentosControllers')
const express = require('express')
const router = express.Router()

router.post('/cadastro', controller.create)

router.get('/lista', controller.getAll)
router.get('/:id', controller.getById)
router.get('/:id', controller.like)

router.put('/:id', controller.replace)
router.patch('/:id', controller.update)

router.delete('/:id', controller.remove)



module.exports = router