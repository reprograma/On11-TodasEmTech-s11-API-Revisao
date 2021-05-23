const models = require('../models/database')
const mochilas = require("../models/mochilas.json") // basta voce trocar para json

const getAll = (req, res) => {
    // const { estado, cidade, bairro, categoria } = req.query;
    // let data = models.estabelecimentos // aqui dentro de models nos vamos em estabelecimentos
    
    // if (estado) {
    //     data = data.filter(estabelecimento => {
    //         return estabelecimento.estado == estado
    //     })    
    // }

    // if (cidade) {
    //     data = data.filter(estabelecimento => {
    //         return estabelecimento.cidade == cidade
    //     })
    // }

    // if (bairro) {
    //     data = data.filter(estabelecimento => {
    //         return estabelecimento.bairro == bairro
    //     })
    // }

    // if (categoria) {
    //     data = data.filter(estabelecimento => {
    //         return estabelecimento.categoria == categoria
    //     })
    // }    
let data = mochilas
let {categoria, cor, tipo, material, tamanho, envio, caixa}=req.query
    if(categoria) {
        data = data.filter(mochila => {
            return mochila.categoria == categoria
        })
    }

if(cor) {
    data = data.filter(mochila => mochila.cor.includes(cor) )
}

if(tipo) {
    data = data.filter(mochila => { 
        return mochila.tipo == tipo 
    })
}

if(material) {
    data = data.filter(mochila => mochila.material.includes(material))
    
}

if(tamanho) {
    data = data.filter(mochila => {
        return mochila.tamanho == tamanho
    })
}

if(envio) {
    data = data.filter(mochila => {
        return mochila.envio == envio
    })
}

if(caixa) {
    data = data.filter(mochila => mochila.caixa.includes(caixa))
}

    return res.status(200).send(data)
}

const get = (req, res) => {
    // const data = models.estabelecimentos

    // const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    // const found = data.find(estabelecimento => {
    //     return estabelecimento.id == id //ainda nao estamos usando o utils mas eu ja deixei o arquivo criado caso voce queira usar, lembre de ver a cola no ultimo ex
    // })

    // if (found == undefined) {
    //     return res.status(404).send({message: 'Estabelecimento não encontrado'})
    // }

    // return res.status(200).send(found)
    const data = mochilas
    const {id} = req.params 
    const found = data.find(mochila =>{
        return mochila.Id == id 
    })

    if (found == undefined) { 
        return res.status(404).send({ message: "Mochila Não Encontrada"})
    }
return res.status(200).send(found)

}

const create = (req, res) => {
    // voce consegue fazer, apenas respire olhe os exemplos!
    // const { 
    //      nome, 
    //      site = 'sem site', 
    //      categoria, 
    //      logradouro, 
    //      numero, 
    //      bairro, 
    //      cidade, 
    //      estado 
    // } = req.body //estou explodindo as propriedade do json para as constantes


    // if (nome === undefined) { // primeira camada Campos requeridos ou opcionais
    //     return res.status(400).send({
    //         "mensagem": "O campo nome não foi enviado"
    //     })
    // }

    // if (typeof nome != "string" || nome.length < 5 || nome.length > 50) { //camada 2 validação do tipo do dado
    //     return res.status(400).send({
    //         "mensagem": "O nome deve ser uma string com tamanho entre 5 e 50 caracteres"
    //     })
    // }

    // if (categoria === undefined) { // primeira camada Campos requeridos ou opcionais
    //     return res.status(400).send({
    //         "mensagem": "O campo categoria não foi enviado"
    //     })
    // }

    // if (!categoriasPermitidas.includes(categoria)) { //camada 2 validação do tipo do dado
    //     return res.status(400).send({
    //         "mensagem": "As categorias permitidas são: restaurante e hotel"
    //     })
    // }
    
const {
        
        categoria,
        cor,
        tipo,
        material,
        tamanho,
        envio,
        caixa 
} = req.body


if(categoria === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo categoria não foi enviado"
    })
}

if(cor === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo cor não foi enviado"
    })
}

if(tipo === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo tipo não foi enviado"
    })
}

if(material === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo material não foi enviado"
    })
}

if(tamanho === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo tamanho não foi enviado"
    })
}

if(envio === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo envio não foi enviado"
    })
}
if(caixa === undefined) {
    return res.status(400).send({ 
        mensagem: "O campo caixa não foi enviado"
    })
}


    const mochila = {
        categoria,
        cor,
        tipo,
        material,
        tamanho,
        envio,
        caixa 
            }


    mochila.Id = mochilas.length+1
    mochilas.push(mochila)
 
     return res.status(201).send(mochila)
}

const categoriasPermitidas = [
    "restaurante",
    "hotel",
]

const remove = (req, res) => {

    const data = models.estabelecimentos

    const { id } = req.params
    
    const estabelecimento = data.find(estabelecimento => {
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
        categoria,
        cor,
        tipo,
        material,
        tamanho,
        envio,
        caixa 
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
    get,
    create,
    remove,
    replace,
    update,
    like,    
}


