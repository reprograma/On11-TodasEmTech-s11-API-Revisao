const estabelecimentos = require('../models/estabelecimentos.json');
const models = require('../models/database');

const getAll = (req, res) => {
    return res.status(200).send(models)
}

const getById = (req, res) => {

    const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    const found = estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id //ainda nao estamos usando o utils mas eu ja deixei o arquivo criado caso voce queira usar, lembre de ver a cola no ultimo ex
    })

    if (found == undefined) {
        return res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    return res.status(200).send(found)
}

const create = (req, res) => {
    // voce consegue fazer, apenas respire olhe os exemplos!
    const { 
         nome, 
         site = 'sem site', 
         categoria, 
         logradouro, 
         numero, 
         bairro, 
         cidade, 
         estado 
    } = req.body //estou explodindo as propriedade do json para as constantes


    if (nome === undefined) { // primeira camada Campos requeridos ou opcionais
        return res.status(400).send({
            "mensagem": "O campo nome não foi enviado"
        })
    }

    if (typeof nome != "string" || nome.length < 5 || nome.length > 50) { //camada 2 validação do tipo do dado
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
        })
    }

    if (categoria === undefined) { // primeira camada Campos requeridos ou opcionais
        return res.status(400).send({
            "mensagem": "O campo categoria não foi enviado"
        })
    }

    const categoriasPermitidas = [
        "restaurante",
        "hotel",
    ]

    if (!categoriasPermitidas.includes(categoria)) { //camada 2 validação do tipo do dado
        return res.status(400).send({
            "mensagem": "As categorias permitidas são: restaurante e hotel"
        })
    }
    
    const estabelecimento = {
        nome, 
        site, 
        categoria, 
        logradouro, 
        numero, 
        bairro, 
        cidade, 
        estado 
        
    }
    estabelecimento.id = models.novoIdEstabelecimento()
    models.estabelecimentos.push(estabelecimento)
 
     return res.status(201).send(estabelecimento)
}


const remove = (req, res) => {

    const { id } = req.params
    
    const estabelecimento = estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id
    })    
    
    if (estabelecimento == undefined) {
        return res.status(404).send({message: 'Estabelecimento não encontrado'})
    }    

    const index = data.indexOf(estabelecimento)

    data.splice(index, 1) // o jeito que o js tira nosso amigo do array

    return res.status(204).send({message: 'Estabelecimento deletado'})
}

const replace = (req, res) => {
    const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id 
    })
   
    if (found == undefined) {
        return res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    const { 
        nome, 
        site = 'sem site', 
        categoria, 
        logradouro, 
        numero, 
        bairro, 
        cidade, 
        estado 
   } = req.body //estou explodindo as propriedade do json para as constantes

   if (nome === undefined) { // primeira camada Campos requeridos ou opcionais
       return res.status(400).send({
           "mensagem": "O campo nome não foi enviado"
       })
   }

   if (typeof nome !== "string" || nome.length < 5 || nome.length > 50) { //camada 2 validação do tipo do dado
       return res.status(400).send({
           "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
       })
   }

   if (categoria === undefined) { // primeira camada Campos requeridos ou opcionais
       return res.status(400).send({
           "mensagem": "O campo categoria não foi enviado"
       })
   }

   if (!categoriasPermitidas.includes(categoria)) { //camada 2 validação do tipo do dado
       return res.status(400).send({
           "mensagem": "As categorias permitidas são: restaurante e hotel"
       })
   }

   found.nome = nome
   found.site = site
   found.categoria = categoria
   found.logradouro = logradouro
   found.numero = numero
   found.bairro = bairro
   found.cidade = cidade
   found.estado = estado

   return res.status(200).send(found)
}

const update = (req, res) => {
    const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id 
    })
   
    if (found == undefined) {
        return res.status(404).send({message: 'Estabelecimento não encontrado'})
    }
    
    const { nome, site, categoria, logradouro, numero, bairro, cidade, estado } = req.body
    
    if (nome != undefined && (typeof nome !== "string" || nome.length < 5 || nome.length > 50)) { //camada 2 validação do tipo do dado
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
        })
    }

    if (categoria != undefined && !categoriasPermitidas.includes(categoria)) { //camada 2 validação do tipo do dado
        return res.status(400).send({
            "mensagem": "As categorias permitidas são: restaurante e hotel"
        })
    }

    found.nome = nome || found.nome
    found.site = site || found.site
    found.categoria = categoria || found.categoria
    found.logradouro = logradouro || found.logradouro
    found.numero = numero || found.numero
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.estado = estado || found.estado

    return res.status(200).send(found)

}

const like = (req, res) => {
    const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    const found = models.estabelecimentos.find(estabelecimento => {
        return estabelecimento.id == id 
    })
   
    if (found == undefined) {
        return res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    found.likes += 1
    return res.status(200).send(found)

    
}

module.exports = {
    getAll,
    getById,
    create,
    remove,
    replace,
    update,
    like,    
}


