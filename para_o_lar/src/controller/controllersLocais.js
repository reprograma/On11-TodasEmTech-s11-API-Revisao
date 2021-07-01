const locaisJson = require("../model/modelsLocais.json")
const fs = require ('fs')
const { isBuffer } = require("util")

// criar local
const create = (request, response)=>{

    let novoLocal = {
        id:Math.random().toString(32).substr(2,6),
        dataCriacao: new Date(),
        localNome: request.body.localNome,
        endereco: request.body.endereco,
        bairro: request.body.bairro,
        telefone: request.body.telefone,
        celular: request.body.celular
    }

    locaisJson.push(novoLocal)

    // fs.writeFile(".src/model/modelsLocais.json",JSON.stringify(locaisJson),'utf8',function(err){
    //     if(err){
    //         return response.status(424).send({message:err})
    //     }
    // })

    response.status(200).json([{
        "mensagem": "local adicionado",
        novoLocal
    }])
}

// GET todos os locais
const getAll = (request,response)=>{
    response.status(200).json(locaisJson)
}

// Deletar local por id
const deleteLocal = (request, response)=>{
    const idRequerido = request.params.id
    let idLocal = locaisJson.find(local=>local.id == idRequerido)

    const indice = locaisJson.indexOf(idLocal)

    locaisJson.splice(indice,1)

    response.status(200).json([{
        "mensagem":"local deletado com sucesso",
        locaisJson
    }])
}

//PUT local
const replaceLocal = (request, response)=>{
    const idRequerido = request.params.id
    let idLocal = locaisJson.find(local=>local.id == idRequerido)


    const localAtualizado = {
        id:idLocal.id,
        dataCriacao: idLocal.dataCriacao,
        localNome: request.body.localNome,
        endereco: request.body.endereco,
        bairro: request.body.bairro,
        telefone: request.body.telefone,
        celular: request.body.celular
    }

    const indice = locaisJson.indexOf(idLocal)

    locaisJson.splice(indice,1,localAtualizado)

    response.status(200).json([{
        "mensagem":"local substituido",
        localAtualizado
    }])
} 

// PATCh para atualizar qualquer informação
const updateLocal = (request, response)=>{
    const idRequerido = request.params.id
    let idLocal = locaisJson.find(local=>local.id == idRequerido)

    let listaChaves = Object.keys(request.body)
    console.log(listaChaves)

    listaChaves.forEach((chave)=>{
        idLocal[chave] = request.body[chave]
    })

    response.status(200).json([{
        "mensagem":"local atualizado",
        idLocal
    }])
}


module.exports = {
    create,
    getAll,
    deleteLocal,
    replaceLocal,
    updateLocal
} 


