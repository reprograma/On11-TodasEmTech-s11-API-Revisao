const express = require('express');
const router = express.Router();
const controller = require('../controllers/cinemasController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/cadastrar', controller.create);
router.put('/substituir/:id', controller.replace);
router.patch('/atualizar/:id', controller.update);
router.patch('/like/:id', controller.like);
router.patch('/dislike/:id', controller.dislike);
router.delete('/deletar/:id', controller.remove);

module.exports = router;
