
// Segue a prévia. Como estou num local com problemas de conexão, subi no github conforme procedimento da tarefa da semana, porém finalizei tal prévia.

const models = require('../models/database') // basta voce trocar para json

const getAll = (req, res) => {
    const data = models.estabelecimentos // aqui dentro de models nos vamos em estabelecimentos
    return res.status(200).send(data)
}

const get = (req, res) => {
    const data = models.estabelecimentos

    const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    const found = data.find(estabelecimento => {
        return estabelecimento.id == id //ainda nao estamos usando o utils mas eu ja deixei o arquivo criado caso voce queira usar, lembre de ver a cola no ultimo ex
    })

    return res.status(200).send(found)
}

 // voce consegue fazer, apenas respire olhe os exemplos!


const create = (req, res) =>{
    let nomeRequerido = req.body.nome
    let siteRequerido = req.body.site
    let categoriaRequerida = req.body.categoria

    let newPost = {
        id: Math.random().toString(32).substr(2,6),
        dataCriacao:new Date(),
        nome: nomeRequerido,
        site:siteRequerido,
        categoria:categoriaRequerida
    }

    estabelecimentosJson.push(newPost)

    res.status(201).json({
        "mensagem":"Post criado",
        newPost
    })
}

 // nao desiste...voce tira de letra

const remove = (req, res) =>{
    const idRequerido = req.params.id
    const postFiltrado = utils.filtrarPost(esabelecimentosJson,idRequerido)

    const indice = estabelecimentosJson.indexOf(postFiltrado)
    

    estabelecimentosJson.splice(indice, 1)

    res.status(200).json({
        "mensagem": "Post deletado",
        estabelecimentosJson
    })
}



const replace = (req, res) => {
// viu voce esta quase terminando

const idRequerido = req.params.id
    let postBody = req.body

    const postFiltrado = utils.filtrarPost(estabelecimentosJson,idRequerido)

    let postAtualizado = {
        id: postFiltrado.id,
        dataCriacao: postFiltrado.dataCriacao,
        nome: postBody.nome,
        site: postBody.site,
        categoria: postBody.categoria
    }

    const indice = estabelecimentosJson.indexOf(postFiltrado)
    estabelecimentosJson.splice(indice, 1, postAtualizado)

    res.status(200).json([{
        "mensagem": "Post substituido com sucesso",
        postAtualizado
    }])
}


// que orgulho


const update = (req, res)=>{
    const idRequerido = req.params.id
    const atualizacaoBody = req.body
    const postFiltrado = utils.filtrarPost(estabelecimentosJson,idRequerido)

    let listaDeChaves = Object.keys(atualizacaoBody)

    listaDeChaves.forEach((chave)=>{
        postFiltrado[chave] = atualizacaoBody[chave]
    })

    res.status(200).json([{
        "mansagem": "Post atualizado com sucesso",
        postFiltrado
    }])
}

module.exports = {
    getAll,
    get,
    create,
    remove,
    replace,
    update,    
}