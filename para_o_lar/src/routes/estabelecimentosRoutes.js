const controller = require('../controllers/estabelecimentosControllers')

const express = require('express')

const router = express.Router()

router.post('/criar', controller.create)
router.get('/todos', controller.getAll)
router.get('/:id', controller.get)
router.delete('/:id', controller.remove)
router.put('/:id', controller.replace)
router.patch('/:id', controller.update)

router.post('/:id/like', controller.like)
router.post('/:id/deslike', controller.deslike)

//Professora, como já foi conversado contigo, fiz apenas a adição da rota/lógica do deslike, prometo refazer e aprimorar esse código assim que estiver melhor! Obrigada pela compreensão e o acolhimento. Xero!

module.exports = router