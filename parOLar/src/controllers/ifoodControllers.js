const ifood = require("../models/ifood.json")
const { request, response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(ifood)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id
    const ifoodFiltrado = ifood.find(loja=> loja.id == idRequerido)
    response.status(200).send(ifoodFiltrado)  
}

const creatloja = (request, response)=>{
    
    const descricaoRequerida = request.body.descricao
    const nomeLojaRequerida = request.body.nomeLoja


    const novaLoja= {
    id: Math.random().toString(32).substr(2,9),
    dataInclusao: new Date(),
    concluido: false,
    descricao: descricaoRequerida,
    nomeContato: nomeLojaRequerida
    }

    ifood.push(novaLoja)

    response.status(200).send(novaLoja)
}

const deleteLoja= (request, response)=>{
    const idRequerido= request.params.id
    const ifoodFiltrado = ifood.find(loja=> loja.id == idRequerido)

    const indice = contatos.indexOf(ifoodFiltrado)
    ifood.splice(indice, 1)

    response.status(200).json([{
        "mensagem":"Loja excluida", ifood
    }])
}

const updateloja = (request, response)=>{
    const idRequerido = request.params.id
    const ifoodBody =request.body
    const ifoodFiltrado = ifood.find(loja => loja.id == idRequerido)
 
    let listaDeChaves = Object.keys(atualizacaoloja)
 
    listaDeChaves.forEach((chave)=>{
       ifoodFiltrado[chave] = ifoodBody[chave]
    })
 
    response.status(200).json([{
       "mensagem": "Loja atualizada com sucesso",
       postFiltrado
    }])
}
const replaceloja = (request, response)=>{
    const idRequerido = request.params.id
    let ifoodBody = request.body
    const ifoodFiltrado = ifood.find(loja => loja.id == idRequerido)
 
        let postAtualizado = {
       id: ifoodFiltrado.id,
       site: ifoodBody.site,
       nome: ifoodBody.nome,
       categoria: ifoodBody.categoria,
       logradouro: ifoodBody.logradouro,
       numero: ifoodBody.numero,
       bairro: ifoodBody.bairro,
       cidade: ifoodBody.cidade,
       estado: ifoodBody.estado
    }
 
    const indice = ifood.indexOf(ifoodFiltrado)
    ifood.splice(indice, 1, postAtualizado)
 
    response.status(200).json([{
       "mensagem": "Post subsitutido com sucesso",
       postAtualizado
    }])
 
 }
const like = (request, response)=>{
    const idRequerido = request.params.id
    const ifoodFiltrado = ifood.find(loja => loja.id == idRequerido)

    if (ifoodFiltrado == undefined){
        return response.status(404).send ({message:'Estabelecimento não encontrado'})
    }
    ifoodFiltrado.likes += 1
    return response.status(200).send(ifoodFiltrado)
}


module.exports={
    getAll,
    getById,
    updateloja,
    replaceloja,
    creatloja,
    deleteLoja,
    like
}