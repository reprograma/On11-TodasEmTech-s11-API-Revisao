
const estabelecimentos = require("../models/estabelecimentos.json")
fs = require("fs")

//GET
const getAll = (request, response) => {
    response.status(200).send(estabelecimentos)
}

//GET
const get = (request, response) => {
    const idRequerido = request.params.id
    const estabelecimentoEncontrado = estabelecimentos.find(estabelecimento => estabelecimento.id == idRequerido)

    if (estabelecimentoEncontrado == undefined) {
        response.status(404).json({
            "mensagem": "id não encontrado"
        })
    }
    else {
        response.status(200).send(estabelecimentoEncontrado)
    }
}

//POST
const create = (request, response) => {

    const novoEstabelecimento = {
        id: Math.random().toString(16).substr(2, 3),
        nome: request.body.nome,
        categoria: request.body.categoria,
        bairro: request.body.bairro
    }

    estabelecimentos.push(novoEstabelecimento)

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(estabelecimentos), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json(novoEstabelecimento)

}

//DELETE
const remove = (request, response) => {
    const idRequerido = request.params.id
    const estabelecimentoEncontrado = estabelecimentos.find(estabelecimento => estabelecimento.id == idRequerido)


    if (estabelecimentoEncontrado == undefined) {
        response.status(404).json({
            "mensagem": "id não encontrado"
        })
    }

    else {
        const indiceEstabelecimento = estabelecimentos.indexOf(estabelecimentoEncontrado)
        response.status(200).send({
            "mensagem": "a tarefa abaixo foi deletada com sucesso",
            estabelecimentoEncontrado,
        })

    }

    estabelecimentos.splice(indiceEstabelecimento, 1)

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(estabelecimentos), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

}

//PUT
const update = (request, response) => {
    const idRequerido = request.params.id
    const estabelecimentoEncontrado = estabelecimentos.find(estabelecimento => estabelecimento.id == idRequerido)

    let estabelecimentoSubstituido = {
        id: estabelecimentoEncontrado.id,
        nome: request.body.nome,
        categoria: request.body.categoria,
        bairro: request.body.bairro
    }

    const indiceEstabelecimento = estabelecimentos.indexOf(estabelecimentoEncontrado)
    estabelecimentos.splice(indiceEstabelecimento, 1, estabelecimentoSubstituido)

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(estabelecimentos), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Estabelecimento substituido com sucesso!",
        estabelecimentoSubstituido
    })
}

//PATCH - Considerar atualização de categoria
const replace = (request, response) => {
    const idRequerido = request.params.id
    const estabelecimentoEncontrado = estabelecimentos.find(estabelecimento => estabelecimento.id == idRequerido)

    const novaCategoria = request.body.categoria

    estabelecimentoEncontrado.categoria = novaCategoria

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(estabelecimentos), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json([{
        "mensagem": "Categoria atualizada com sucesso",
        estabelecimentoEncontrado
    }])

}

module.exports = {
    getAll,
    get,
    create,
    remove,
    update,
    replace
}