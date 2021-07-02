const mongoose = require("mongoose")

const Estabelecimento = require("../models/estabelecimento")

const createShop = async (req,res) => {
    const estabelecimento = new Estabelecimento({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        categoria: req.body.categoria
    })
    const estabelecimentoExistente = await Titulo.findOne({ nome: req.body.nome })
    if (tituloJaExiste) {
        return res.status(409).json()
    }

    try {
        const novoEstabelecimento = await estabelecimento.save()
        res.status(201).json(novoEstabelecimento)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const getAll = async (req, res) => {
    const estabelecimentos = await Estabelecimento.find()
    return res.status(200).json(estabelecimentos)
}

const getByShop = async (req, res) => {
    
}




module.exports = {
    createShop,
    getAll
}