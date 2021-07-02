const mongoose = require("mongoose")

const tituloSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("estabelecimento", tituloSchema)