const models = require('../models/database')

const getAll = (req, res) => {
    const {
        estado,
        cidade,
        bairro,
        categoria,
        especialidade
    } = req.query;

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
    if (especialidade) {
        data = data.filter(estabelecimento => {
            return estabelecimento.especialidade == especialidade
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
const create = (req, res) => {
    const {
        nome,
        site = 'sem site',
        categoria,
        especialidade,
        logradouro,
        numero,
        bairro,
        cidade,
        estado
    } = req.body

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
            "mensagem": "As categorias permitidas são: restaurante e cafeteria"
        })
    }
    const estabelecimento = {
        nome,
        site,
        categoria,
        especialidade,
        logradouro,
        numero,
        bairro,
        cidade,
        estado
    }
    estabelecimento.id = models.novoIdEstabelecimento()
    models.estabelecimentos.push(estabelecimento)

    return res.status(201).json([{
        "mensagem": "Estabelecimento criado com sucesso!",
        estabelecimento
    }])
}
const categoriasPermitidas = [
    "restaurante",
    "cafeteria",
]
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
const replace = (req, res) => {
    const { id } = req.params
    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id
    })
    if (found == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }
    const {
        nome,
        site = 'sem site',
        categoria,
        especialidade,
        logradouro,
        numero,
        bairro,
        cidade,
        estado
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
            "mensagem": "As categorias permitidas são: restaurante e hotel"
        })
    }
    found.nome = nome
    found.site = site
    found.categoria = categoria
    found.especialidade = especialidade
    found.logradouro = logradouro
    found.numero = numero
    found.bairro = bairro
    found.cidade = cidade
    found.estado = estado

    return res.status(200).json([{
        "mensagem": "Estabelecimento atualizado com sucesso!",
        found
    }])
}
const update = (req, res) => {
    const { id } = req.params
    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id
    })
    if (found == undefined) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }
    const {
        nome,
        site,
        categoria,
        especialidade,
        logradouro,
        numero,
        bairro,
        cidade,
        estado
    } = req.body

    if (nome != undefined && (typeof nome !== "string" || nome.length < 5 || nome.length > 50)) {
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
        })
    }
    if (categoria != undefined && !categoriasPermitidas.includes(categoria)) {
        return res.status(400).send({
            "mensagem": "As categorias permitidas são: restaurante e cafetereia"
        })
    }
    found.nome = nome || found.nome
    found.site = site || found.site
    found.categoria = categoria || found.categoria
    found.especialidade = especialidade || found.especialidade
    found.logradouro = logradouro || found.logradouro
    found.numero = numero || found.numero
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.estado = estado || found.estado

    return res.status(200).json([{
        "mensagem": "Estabelecimento atualizado!",
        found
    }])
}
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

    res.status(204).json([{
        "mensagem": "Estabelecimento deletado com sucessso!",
        estabelecimento
    }])
}

module.exports = {
    getAll,
    getById,
    create,
    like,
    replace,
    update,
    remove,
}


