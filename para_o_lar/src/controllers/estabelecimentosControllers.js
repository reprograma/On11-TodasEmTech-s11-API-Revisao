const estabelecimentosJson = require("../models/estabelecimentos")
const utils = require("../utils/estabelecimentosUtils")

    const getAll = (request, response)=>{
        response.status(200).json(estabelecimentosJson)
    }

    const getById = (request, response)=>{
        const idRequerido = request.params.id
        response.status(200).send(utils.filtrarEstabelecimento(estabelecimentosJson, idRequerido))
    }

    const createEstabelecimento = (request, response)=>{
        let nomeRequerido = request.body.nome
        let siteRequerido = request.body.site
        let categoriaRequerida = request.body.categoria
        let cidadeRequerida = request.body.cidade
        let estadoRequerido = request.body.cidade

        let newEstabelecimento = {
            id: Math.random().toString(32).substr(2,6),
            nome: nomeRequerido,
            site: siteRequerido,
            categoria: categoriaRequerida,
            cidade: cidadeRequerida,
            estado: estadoRequerido
        }

        estabelecimentosJson.push(newEstabelecimento)

        response.status(201).json([{
        "mensagem": "Estabelecimento criado com sucesso!",
        newEstabelecimento
        }])

    }

    const replaceEstabelecimento =(request, response)=>{
        const idRequerido = request.params.id
        let estabelecimentoBody = request.body

        const estabelecimentoFiltrado =  utils.filtrarEstabelecimento(estabelecimentosJson, idRequerido)

        let estabelecimentoAtualizado = {
            id: estabelecimentoFiltrado.id,
            nome: estabelecimentoBody.nome,
            site: estabelecimentoBody.site,
            categoria: estabelecimentoBody.categoria,
            estado: estabelecimentoBody.estado
        }
        
        const indice = estabelecimentosJson.indexOf(estabelecimentoFiltrado)
        estabelecimentosJson.splice(indice, 1, estabelecimentoAtualizado)

        response.status(200).json([{
            "mensagem": "Estabelecimento substituido com sucesso!",
            estabelecimentoAtualizado
        }])

    }
    const updateNome = (request, response) =>{
        const idRequerido = request.params.id
        let newNome = request.body.nome
        const estabelecimentoFiltrado = estabelecimentosJson.find(estabelecimentos => estabelecimentos.id == idRequerido)
    
        estabelecimentoFiltrado.nome = newNome
    
        response.status(200).json([{
            "mensagem": "Nome do estabelecimento atualizado com sucesso",
            estabelecimentoFiltrado
        }])
    }

    const remove = (request, response) => {
        const idRequerido = request.params.id
        const estabelecimentoFiltrado = utils.filtrarEstabelecimento(estabelecimentosJson, idRequerido)

        const indice = estabelecimentosJson.indexOf(estabelecimentoFiltrado)


        estabelecimentosJson.splice(indice, 1)
       
        response.status(200).json([{
            "mensagem": "Estabelecimento removido com sucesso!",
            estabelecimentosJson
        }])
    }
    

module.exports ={
    getAll,
    getById,
    createEstabelecimento,
    replaceEstabelecimento,
    updateNome,
    remove
}