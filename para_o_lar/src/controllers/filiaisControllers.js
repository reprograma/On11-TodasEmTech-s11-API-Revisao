const eletronicaJson = require("../models/eletronica.json")
const fs = require("fs")
const { response } = require("express")

const gettAll = (request, response) =>{
    const { loja, cidade, segmento} = request.query;
    let data = eletronicaJson

    if (loja){
        data = data.filter(filiais =>filiais.loja == loja)
    }
    if (cidade){
        data = data.filter(filiais =>filiais.cidade == cidade)

    }
    if (segmento){
        data = data.filter(filiais => filiais.segmento == segmento)

    }

    response.status(200).send(data)

}

const getById = (request, response) => {

    const { id } = request.params
    const idFiltered = petshopJson.find(petshop => petshop.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(404).json([{
            "mensagem": "Informe um ID válido"
        }])
    }

    response.status(200).send(idFiltered)

}

function criarNovoId() {
    let id = 0
    petshopJson.forEach(item => {
        if (item.id > id) { id = item.id }
    });

    id = id + 1
    return id

}

const create = (request, response) => {
    const { loja, cidade, segmento, site, telefone, estado } = request.body
if (loja === undefined){
    res.status(400).send({
        "mensagem": "o campo não foi enviado"
    })
}

if (typeof loja != "string" || loja.length < 5 || loja.length > 25){
    res.status(409).send({
        "mensagem": " o campo deve conter uma string entre 9 e 28 caracteres"

    })
}

if (site === undefined || site === ""){
    res.status(400).send({
        "mensagem": "o campo site não foi enviado"
    })
}

eletronicaJson.push({
    id: criarNovoId(),
    loja, cidade, segmento, site, telefone, estado 
})

fs.writeFile("./src/models/eletronica.json", JSON.stringify(eletronicaJson), "tf8", function(err){
    if (err){
        return response.status(412).send({mesage:err})

    }
})

response.status(200).json({
    "mensagem": "Nova loja adicionada com sucesso",
    eletronicaJson
})
}


const replace = (request, response) => {
    const { id } = request.params
    const eletronica = request.body
    const idFiltered = eletronicaJson.find(eletronica => eletronica.id == id)

    if (idFiltered == undefined || id == " ") {
        return response.status(400).json([{
            "mensagem": " loja não encontrada"
        }])
    }

    let updateEletronica = {
        id: idFiltered.id,
        loja: EletronicaTotal.loja,
        cidade: idFiltered.cidade,
        segmento: EletronicaTotal.segmento,
        site: EletronicaTotal.site,
        telefone: EletronicaTotal.telefone,
        estado: idFiltered.estado,

    }

    const loja = eletronicaJson.indexOf(idFiltered)
    eletronicaJson.splice(indice, 1, updateEstabelecimento)