const entidadesBeneficentesJson = require("../models/entidadesBeneficentes.json")
const fs = require("fs")

//***METODO GET***\\

const getAll = (request, response) => {
    const { nome, bairro, categoria } = request.query;
    let data = entidadesBeneficentesJson

    if (nome) {
        data = data.filter(estabelecimento => estabelecimento.nome == nome)
    }

    if (bairro) {
        data = data.filter(estabelecimento => estabelecimento.bairro == bairro)
    }

    if (categoria) {
        data = data.filter(estabelecimento => estabelecimento.categoria == categoria)
    }

    response.status(200).send(data)
}


const getById = (request, response) => {

    const { id } = request.params
    const idFiltered = entidadesBeneficentesJson.find(entidadesBeneficentes => entidadesBeneficentes.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": "Informe um ID válido, por favor"
        }])
    }

    response.status(200).send(idFiltered)

}

function criarNovoId() {
    let id = 0
    entidadesBeneficentes.forEach(item => {
        if (item.id > id) { id = item.id }
    });

    id = id + 1
    return id
}

//***METODO POST***\\

const create = (request, response) => {
    const { nome, site, categoria, logradouro, numero, bairro, cidade, estado, telefone } = request.body

    if (nome === undefined) { 
        res.status(400).send({
            "mensagem": "O campo nome não foi enviado"
        })
    }

    if (typeof nome != "string" || nome.length < 5 || nome.length > 25) { 
        res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 25 caracteres"
        })
    }

    if (categoria === undefined || categoria === "") { 
        res.status(400).send({
            "mensagem": "O campo categoria não foi enviado"
        })
    }

    entidadesBeneficentesJson.push({
        id: criarNovoId(),
        nome, site, categoria, logradouro, numero, bairro, cidade, estado, telefone
    })

    fs.writeFile("./src/models/entidadesBeneficentes.json", JSON.stringify(entidadesBeneficentesJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(201).json({
        "mensagem": "Entidade beneficente cadastrada, você está ajudando a salvar vidas",
        entidadesBeneficentes
    })
}

///***METODO PUT***\\

const replace = (request, response) => {
    const { id } = request.params
    const entidadesBeneficentesBody = request.body
    const idFiltered = entidadesBeneficentes.find(entidadesBeneficentes => entidadesBeneficentes.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Entidade beneficente não encontrada, informe um ID válido por favor"
        }])
    }


    let updateEstabelecimento = {
        id: idFiltered.id,
        nome: idFiltered.nome,
        site: entidadesBeneficentes.site,
        categoria: entidadesBeneficentesBody.categoria,
        logradouro: entidadesBeneficentesBody.logradouro,
        numero: entidadesBeneficentesBody.numero,
        bairro: entidadesBeneficentesBody.bairro,
        cidade: idFiltered.cidade,
        estado: idFiltered.estado,
        telefone: entidadesBeneficentes.telefone
    }

    const indice = entidadesBeneficentes.indexOf(idFiltered)
    entidadesBeneficentesJson.splice(indice, 1, updateEstabelecimento)

    fs.writeFile("./src/models/entidadesBeneficentes.json", JSON.stringify(entidadesBeneficentesJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Entidade beneficente atualizada com sucesso",
        updateEstabelecimento
    })

}

//***METODO PATCH***\\

const update = (request, response) => {
    const { id } = request.params
    const updateBody = request.body
    const idFiltered = entidadesBeneficentes.find(entidadesBeneficentes => entidadesBeneficentes.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Entidade beneficente não encontrada, informe um ID válido por favor"
        }])
    }


    Object.keys(updateBody).forEach((chave) => {
        idFiltered[chave] = updateBody[chave]
    })

    fs.writeFile("./src/models/entidadesBeneficentes.json", JSON.stringify(entidadesBeneficentesJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Entidade beneficente atualizada com sucesso",
        idFiltered
    })
}

//***METODO DELETE***\\

const remove = (request, response) => {
    const { id } = request.params
    const idFiltered = entidadesBeneficentes.find(entidadesBeneficentes => entidadesBeneficentes.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Entidade beneficente não encontrada, informe um ID válido por favor"
        }])
    }

    const indice = entidadesBeneficientes.indexOf(idFiltered)
    entidadesBeneficentes.splice(indice, 1)

    fs.writeFile("./src/models/entidadesBeneficentes.json", JSON.stringify(entidadesBeneficentesJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Entidade beneficente deletada com sucesso, que triste :/",
        entidadesBeneficentes
    })
}

const like = (request, response) => {
    const { id } = request.params 
    const idFiltered = entidadesBeneficentes.find(entidadesBeneficentes => entidadesBeneficentes.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Entidade beneficente não encontrada, informe um ID válido por favor"
        }])
    }

    idFiltered.likes += 1

    fs.writeFile("./src/models/entidadesBeneficentes.json", JSON.stringify(entidadesBeneficentesJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).send(idFiltered)


}
module.exports = {
    getAll,
    getById,
    create,
    replace,
    update,
    remove,
    like
} 