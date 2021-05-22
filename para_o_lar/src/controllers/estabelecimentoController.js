const estabelecimentoJSON = require("../models/database")
const fs = require("fs")

const getAll = (request, response)=>{
    response.status(200).send(estabelecimentoJSON)
}

const filtrado = (request, response)=>{
    const { id } = request.params
    const idRequerido = estabelecimentoJSON.estabelecimentos.find( estabelecimento => {
        return estabelecimento.id == id
    })

    if(idRequerido === undefined){
        response.status(404).send({message:"Loja não encontrada"})
    }

    response.status(200).send(idRequerido)
}
const createEstabelecimento = (request, response)=>{
    const {
        nome, 
        site = 'Sem Site', 
        categoria, 
        logradouro, 
        numero, 
        bairro, 
        cidade, 
        estado
    } = request.body
    if(nome === undefined){
        response.status(400).send({
            "Mensagem":"O nome não foi enviado"
        })
    }

    let newLoja ={
        id: Math.random().toString(32).substr(2,6),
        nome, site, categoria, logradouro, numero, bairro, cidade, estado
    }

    estabelecimentoJSON.estabelecimentos.push(newLoja)
    fs.writeFile("./src/models/database.json", JSON.stringify(estabelecimentoJSON), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        }else{
            response.status(201).send(estabelecimentoJSON)
        }
    })
     
}

const atualizacao = (request, response)=>{
    const { id } = request.params

    const found = estabelecimentoJSON.estabelecimentos.find(estabelecimento =>{
        return estabelecimento.id == id
    })
    if(found === undefined){
        response.status(404).send({menssage:"Loja não encontrada"})
    }
    const {
        nome, 
        site, 
        categoria, 
        logradouro, 
        numero, 
        bairro, 
        cidade, 
        estado
    } = request.body

    found.nome = nome  || found.nome
    found.site = site  || found.site
    found.categoria =  categoria   || found.categoria
    found.logradouro  = logradouro || found.logradouro 
    found.numero = numero || found.numero 
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.estado = estado || found.estado

    fs.writeFile("./src/models/database.json", JSON.stringify(estabelecimentoJSON), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        } else{
            response.status(200).send({
                "Mensagem":"Loja atualizada com sucesso!",
                found
            })
        }
    })
}
const deleteLoja = (request, response)=>{
    const idRequerido = request.params.id
    const idFiltrado = estabelecimentoJSON.estabelecimentos.find(loja => loja.id == idRequerido)

    const indice = estabelecimentoJSON.estabelecimentos.indexOf(idFiltrado)

    estabelecimentoJSON.estabelecimentos.splice(indice, 1)
    fs.writeFile("./src/models/database.json", JSON.stringify(estabelecimentoJSON), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        } else{
            response.status(204).json([{
                "mensagem": "Estabelecimento deletada com sucesso",
                estabelecimentoJSON
            }])
        }
    })

    
}

const like = (request, response)=>{
    const { id } = request.params
    const idFiltrado = estabelecimentoJSON.estabelecimentos.find(loja => loja.id == id)

    if(idFiltrado === undefined){
        response.status(404).send({"Mensagem":"Loja não encontrada"})
    }
    idFiltrado.likes +=1
    return response.status(200).send(idFiltrado)
}

const deslike = (request, response)=>{
    const { id } = request.params
    const idFiltrado = estabelecimentoJSON.estabelecimentos.find(loja => loja.id == id)

    if(idFiltrado === undefined){
        response.status(404).send({"Mensagem":"Loja não encontrada"})
    }
    idFiltrado.likes -=1
    return response.status(200).send(idFiltrado)
}

module.exports ={
    getAll,
    createEstabelecimento,
    filtrado,
    atualizacao,
    deleteLoja,
    like,
    deslike
}