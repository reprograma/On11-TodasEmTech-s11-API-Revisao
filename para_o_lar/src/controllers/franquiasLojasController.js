const franquias = require("../models/franquias_lojas.json");
// const { response } = require("express")
// const { request } = require("../app")

const getAll = (request, response)=>{
    response.status(200).send(franquias)
}

const get = (request, response)=>{

    const id = request.params.id;
    let franquia = franquias.find(f => f.id == id);

    if(franquia == undefined || id == "") {
        response.status(404).json([{
            "mensagem":"Dados inválidos"
        }]);
    } 
    else {
        response.status(200).json(franquia);
    }
}

const create = (request, response)=>{
    const franchisee = request.body.franchisee;
    const site = request.body.site;
    const like = request.body.like;
    const address = request.body.address;
    const cep = request.body.cep;
    const city = request.body.city;
    const state = request.body.state;
    const region = request.body.region;
    const cnpj = request.body.cnpj;
    const email = request.body.email;
    const phone = request.body.phone;
    const tax = request.body.tax;
    
    if((franchisee != "" || franchisee != undefined) && (site != "" || site != undefined)){
        const newFranquia = {
            id: Math.random().toString(32).substr(2,9),
            likes: like,
            franchisee: franchisee,
            site: site,
            address: address,
            cep: cep,
            city: city,
            state: state,
            region: region,
            cnpj: cnpj,
            email: email,
            phone: phone,
            tax: tax
        }
        response.status(200).json([{
            "mensagem": "Franquia cadastrada com sucesso",
            newFranquia
        }]);
    }
    else {
        response.status(500).json([{
            "mensagem": "Preencha os campos Franqueado e Site",
        }]);
    }
}

const alter = (req, res)=>{
    const { id } = req.params // é o mesmo que escrever const id = request.params.id

    if(id != undefined) {
        const found = franquias.find(franquia => {
            return franquia.id == id 
        })
       
        if (found == undefined) {
            return res.status(404).send({message: 'Franquia não encontrada'})
        }
    
        const { 
            franchisee, 
            site = 'sem site', 
            like, 
            address, 
            cep, 
            city, 
            state, 
            region,
            cnpj,
            email,
            phone,
            tax 
       } = req.body //estou explodindo as propriedade do json para as constantes
    
       if (franchisee === undefined) { // primeira camada Campos requeridos ou opcionais
           return res.status(400).send({
               "mensagem": "O campo franquueado não foi enviado"
           });
       }
    
       if (typeof franchisee !== "string" || franchisee.length < 1 || franchisee.length > 100) { //camada 2 validação do tipo do dado
           return res.status(400).send({
               "mensagem": "O nome deve ser uma string com tamanho entre 1 e 100 caracteres"
           });
       }
    
       found.franchisee = franchisee
       found.site = site
       found.like = like
       found.address = address
       found.cep = cep
       found.city = city
       found.state = state
       found.region = region
       found.cnpj = cnpj
       found.email = email
       found.phone = phone
       found.tax = tax
    
       return res.status(200).send({
           "mensagem": "Franquia alterada com sucesso!",
           found
       })
    }
    else {
        return res.status(400).send({
            "mensagem": "Id inválido"
        });
    }
}

const update = (req, res)=>{
    const { id } = req.params // é o mesmo que escrever const idRequerido = request.params.id
    
    const found = franquias.find(franquia => {
        return franquia.id == id 
    })
   
    if (found == undefined) {
        return res.status(404).send({message: 'Franquia não encontrada'})
    }
    
    const { franchisee, site, like, address, cep, city, state, region, cnpj, email, phone, tax} = req.body

    if (typeof franchisee !== "string" || franchisee.length < 1 || franchisee.length > 100) { //camada 2 validação do tipo do dado
        return res.status(400).send({
            "mensagem": "O nome deve ser uma string com tamanho entre 1 e 100 caracteres"
        });
    }

    found.franchisee = franchisee || found.franchisee
    found.site = site || site
    found.like = like || like
    found.address = address || address
    found.cep = cep || cep
    found.city = city || city
    found.state = state || state
    found.region = region || region
    found.cnpj = cnpj || cnpj
    found.email = email || email
    found.phone = phone || phone
    found.tax = tax || tax

    return res.status(200).send({
        "mensagem": "Franquia atualizada com sucesso!",
        found
    })
}

const remove = (req, res)=>{
    const { id } = req.params

    const franquia  = franquias.find(f =>{
        return f.id == id
    });

    if(franquia == undefined) {
        return res.status(400).send({message: "Franquia não encontrada"});
    }

    const index = franquias.indexOf(franquia);
    franquias.splice(index, 1);

    return res.status(200).send({
        "mensagem": "Franquia deletada!",
        franquia
    })
}

const like = (req, res)=>{
    const { id } = req.params // é o mesmo que escrever const id = request.params.id
    
    const found =franquias.find(franquia => {
        return franquia.id == id 
    })
   
    if (found == undefined) {
        return res.status(404).send({message: 'Franquia não encontrada'})
    }

    found.like += 1

    return res.status(200).send(found)
}

module.exports = {
    getAll,
    get,
    create,
    alter,
    update,
    remove,
    like
}