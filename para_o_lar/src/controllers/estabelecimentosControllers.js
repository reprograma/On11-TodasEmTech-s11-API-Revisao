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

const create = (req, res) => {
 // voce consegue fazer, apenas respire olhe os exemplos!
}

const remove = (req, res) => {
 // nao desiste...voce tira de letra
}

const replace = (req, res) => {
// viu voce esta quase terminando
}

const update = (req, res) => {
// que orgulho
}

module.exports = {
    getAll,
    get,
    create,
    remove,
    replace,
    update,    
}


