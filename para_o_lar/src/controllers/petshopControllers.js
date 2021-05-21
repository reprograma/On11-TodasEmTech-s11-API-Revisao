const petshopJson = require("../models/petshop.json")
const fs = require("fs") // fs serve para registrar as mudanças que fazemos no postman pafra o json


//MÉTOEDOS GETS
const getAll = (request, response) => {
    const { nome, bairro, categoria } = request.query;
    let data = petshopJson // aqui dentro de models nos vamos em estabelecimentos

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
    const idFiltered = petshopJson.find(petshop => petshop.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": "Por favor informe um ID válido"
        }])
    }

    response.status(200).send(idFiltered)

}



// Função paara gerar um novo ID
function criarNovoId() {
    let id = 0
    petshopJson.forEach(item => {
        if (item.id > id) { id = item.id }
    });

    id = id + 1
    return id
}

//MÉTODO POST
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

    petshopJson.push({
        id: criarNovoId(),
        nome, site, categoria, logradouro, numero, bairro, cidade, estado, telefone
    })

    fs.writeFile("./src/models/petshop.json", JSON.stringify(petshopJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(201).json({
        "mensagem": "Novo Estabelecimento Adicionado com Sucesso",
        petshopJson
    })
}

//MÉTODO PUT 
const replace = (request, response) => {
    const { id } = request.params
    const petshopBody = request.body
    const idFiltered = petshopJson.find(petshop => petshop.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Estabelecimento não encontrado, Por favor informe um ID válido"
        }])
    }


    let updateEstabelecimento = {
        id: idFiltered.id,
        nome: idFiltered.nome,
        site: petshopBody.site,
        categoria: petshopBody.categoria,
        logradouro: petshopBody.logradouro,
        numero: petshopBody.numero,
        bairro: petshopBody.bairro,
        cidade: idFiltered.cidade,
        estado: idFiltered.estado,
        telefone: petshopBody.telefone
    }

    const indice = petShopJson.indexOf(idFiltered)
    petshopJson.splice(indice, 1, updateEstabelecimento)

    fs.writeFile("./src/models/petshop.json", JSON.stringify(petshopJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Estabelecimento Atualizado com Sucesso",
        updateEstabelecimento
    })

}

//MÉTODO PATCH
const update = (request, response) => {
    const { id } = request.params
    const updateBody = request.body
    const idFiltered = petshopJson.find(petshop => petshop.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Estabelecimento não encontrado, Por favor informe um ID válido"
        }])
    }


    Object.keys(updateBody).forEach((chave) => {
        idFiltered[chave] = updateBody[chave]
    })

    fs.writeFile("./src/models/petshop.json", JSON.stringify(petshopJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Estabelecimento Atualizado com Sucesso",
        idFiltered
    })
}

//MÉTODO DELETE
const remove = (request, response) => {
    const { id } = request.params
    const idFiltered = petshopJson.find(petshop => petshop.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": "Estabelecimento não encontrado, Por favor informe um ID válido"
        }])
    }

    const indice = petshopJson.indexOf(idFiltered)
    petshopJson.splice(indice, 1)

    fs.writeFile("./src/models/petshop.json", JSON.stringify(petshopJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json({
        "mensagem": "Estabelecimento Deletado com Sucesso",
        petshopJson
    })
}

const like = (request, response) => {
    const { id } = request.params // é o mesmo que escrever const idRequerido = request.params.id
    const idFiltered = petshopJson.find(petshop => petshop.id == id)
   
    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": " Estabelecimento não encontrado"
        }])
    }

    idFiltered.likes += 1

    fs.writeFile("./src/models/petshop.json", JSON.stringify(petshopJson), "utf8", function (err) {
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