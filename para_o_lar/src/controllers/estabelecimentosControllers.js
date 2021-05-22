const models = require('../models/database')
const fs = require("fs")

//METODO POST
const create = (req, res) => {
    const {
        nome, site = 'sem site', categoria, logradouro, numero, bairro, cidade, estado } = req.body

    if (nome === undefined) {
        return res.status(400).send({
            "mensagem": "O campo nome não foi enviado"
        })
    }

    if (typeof nome != "string" || nome.length < 5 || nome.length > 50) {
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
        })
    }

    if (categoria === undefined) {
        return res.status(400).send({
            "mensagem": "O campo categoria não foi enviado"
        })
    }

    if (!categoriasPermitidas.includes(categoria)) {
        return res.status(400).send({
            "mensagem": "Ainda não aceitamos a sua categoria de estabelecimento como ponto de entrega de doaçõe. Atualmente estamos trabalhando com: restaurante, hotel, supermercado, farmacia, escola"
        })
    }

    const estabelecimento = {
        nome, site, categoria, logradouro, numero, bairro, cidade, estado
    }
    estabelecimento.id = models.novoIdEstabelecimento()
    models.estabelecimentos.push(estabelecimento)

    fs.writeFile("./src/models/database.js", JSON.stringify(models), 'utf8', function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }

    })
    return res.status(201).send(estabelecimento)
}

const categoriasPermitidas = [
    "restaurante",
    "hotel",
    "supermercado",
    "farmacia",
    "escola"
]

//METODO GET
const getAll = (req, res) => {
    const { estado, cidade, bairro, categoria } = req.query;
    let data = models.estabelecimentos

    if (estado) {
        data = data.filter(estabelecimento => {
            return estabelecimento.estado == estado
        })
    }

    if (cidade) {
        data = data.filter(estabelecimento => {
            return estabelecimento.cidade == cidade
        })
    }

    if (bairro) {
        data = data.filter(estabelecimento => {
            return estabelecimento.bairro == bairro
        })
    }

    if (categoria) {
        data = data.filter(estabelecimento => {
            return estabelecimento.categoria == categoria
        })
    }

    return res.status(200).send(data)
}

const getById = (req, res) => {
    const data = models.estabelecimentos

    const { id } = req.params

    const found = data.find(estabelecimento => {
        return estabelecimento.id == id
    })

    if (found == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }

    return res.status(200).send(found)
}


//METODO PUT
const replace = (req, res) => {
    const { id } = req.params
    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id
    })

    if (found == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }

    const {
        nome, site = 'sem site', categoria, logradouro, numero, bairro, cidade, estado
    } = req.body 

    if (nome === undefined) { 
        return res.status(400).send({
            "mensagem": "O campo nome não foi enviado"
        })
    }

    if (typeof nome !== "string" || nome.length < 5 || nome.length > 50) { 
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
        })
    }

    if (categoria === undefined) { 
        return res.status(400).send({
            "mensagem": "O campo categoria não foi enviado"
        })
    }

    if (!categoriasPermitidas.includes(categoria)) { 
        return res.status(400).send({
            "mensagem": "Ainda não aceitamos a sua categoria de estabelecimento como ponto de entrega de doaçõe. Atualmente estamos trabalhando com: restaurante, hotel, supermercado, farmacia, escola"
        })
    }

    found.nome = nome
    found.site = site
    found.categoria = categoria
    found.logradouro = logradouro
    found.numero = numero
    found.bairro = bairro
    found.cidade = cidade
    found.estado = estado

    return res.status(200).send(found)
}

//METODO PATCH
const update = (req, res) => {
    const { id } = req.params 

    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id
    })

    if (found == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }

    const { nome, site, categoria, logradouro, numero, bairro, cidade, estado } = req.body

    if (nome != undefined && (typeof nome !== "string" || nome.length < 5 || nome.length > 50)) { 
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
        })
    }

    if (categoria != undefined && !categoriasPermitidas.includes(categoria)) {
        return res.status(400).send({
            "mensagem": "Ainda não aceitamos a sua categoria de estabelecimento como ponto de entrega de doaçõe. Atualmente estamos trabalhando com: restaurante, hotel, supermercado, farmacia, escola"
        })
    }

    found.nome = nome || found.nome
    found.site = site || found.site
    found.categoria = categoria || found.categoria
    found.logradouro = logradouro || found.logradouro
    found.numero = numero || found.numero
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.estado = estado || found.estado

    return res.status(200).send(found)

}

//CURTIR
const like = (req, res) => {
    const { id } = req.params 

    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id
    })

    if (found == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }

    found.likes += 1
    return res.status(200).send(found)


}

//METODO DELETE

const remove = (req, res) => {

    const data = models.estabelecimentos

    const { id } = req.params

    const estabelecimento = data.find(estabelecimento => {
        return estabelecimento.id == id
    })

    if (estabelecimento == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }

    const index = data.indexOf(estabelecimento)

    data.splice(index, 1)

    fs.writeFile("./src/models/database.js", JSON.stringify(models), 'utf8', function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    return res.status(204).send({ message: 'Estabelecimento deletado' })
}

module.exports = {
    create,
    getAll,
    getById,
    replace,
    update,
    remove,
    like
}


