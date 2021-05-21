const marcasJson = require("../models/marcas.json");
const { inputData , integrityJson } = require("../utils/marcas")





const getAll = (request, response) => {



    response.status(200).json(marcasJson)



}

const getById = (request, response) => {

    const Id = request.params.id;
    const idFiltrado = marcasJson.find(id => id.id == Id);


    if (Id.length > 2 || Id.length < 1 || Id == undefined) {

        response.status(400).json([{ "mensagem": "insira o id corretamente!" }])

    } else {

        if (idFiltrado == undefined) {
            response.status(404).json([{ "mensagem": "Marca não encontrada!" }])
        } else { response.status(200).send(idFiltrado); }
    }

}




const getByName = (request, response) => {

    const Nome = request.query.nome.toLowerCase();
    const nomeFiltrado = marcasJson.find(nome => nome.nome.toLowerCase() == Nome);



    if (Nome.length > 20 || typeof Nome != "string" || Nome.length < 3) {

        response.status(400).json([{ "mensagem": "insira o nome corretamente!" }])

    } else {
        if (nomeFiltrado == undefined) {

            response.status(404).json([{ "mensagem": "Marca não encontrada!" }])
        } else { response.status(200).send(nomeFiltrado); }
    }
}


const getVegans = (request, response) => {

    const marca = marcasJson.filter(marcas => marcas.vegana == "100% vegana");
    response.status(200).send(marca)

}


const getVegansOptions = (request, response) => {

    const marca = marcasJson.filter(marcas => marcas.vegana == "opções veganas");
    response.status(200).send(marca)

}



const getCrueltyFree = (request, response) => {

    const marca = marcasJson.filter(marcas => marcas.crueltyFree == "sim");
    response.status(200).send(marca)

}



const getCrueltyFreeAndVegan = (request, response) => {

    const marca = marcasJson.filter(marcas => marcas.crueltyFree == "sim" && marcas.vegana == "100% vegana");
    response.status(200).send(marca)

}



const add = (request, response) => {

    const nomeMarca = request.body.nome
    const id = marcasJson.length + 1
    const Vegana = request.body.vegana
    const crueltyfree = request.body.crueltyFree

    const Marca = {
        "nome": nomeMarca,
        "id": id,
        "vegana": Vegana,
        "crueltyFree": crueltyfree

    }


    marcasJson.push(Marca)


    response.status(200).send(marcasJson)



}


const deleteById = (request, response) => {


    const Id = request.params.id;
    const idFiltrado = marcasJson.find(id => id.id == Id);
    const index = marcasJson.indexOf(idFiltrado)


    if (Id.length > 2 || Id.length < 1 || Id == undefined) {

        response.status(400).json([{ "mensagem": "insira o id corretamente!" }])

    } else {

        if (idFiltrado == undefined) {
            response.status(404).json([{ "mensagem": "Marca não encontrada!" }])
        } else {
            marcasJson.splice(index, 1)


            response.status(200).send(marcasJson);
        }



    }







}

const deleteByName = (request, response) => {

    const Nome = request.query.nome.toLowerCase();
    const nomeFiltrado = marcasJson.find(nome => nome.nome.toLowerCase() == Nome);

    const index = marcasJson.indexOf(nomeFiltrado)



    if (Nome.length > 20 || typeof Nome != "string" || Nome.length < 3) {

        response.status(400).json([{ "mensagem": "insira o nome corretamente!" }])

    } else {
        if (nomeFiltrado == undefined) {

            response.status(404).json([{ "mensagem": "Marca não encontrada!" }])
        } else {



            marcasJson.splice(index, 1)


            response.status(200).send(marcasJson);
        }

    }

}





const replaceById = (request, response) => {
    let marcaUpdate = inputData(request.body);
    let marca = marcasJson.find(marca => marca.id == request.params.id)
    let update = integrityJson(marcasJson, marcaUpdate)

    if (marcaUpdate == null)
        return response.status(400).send({ mensagem: "Por favor, enviar um json como body." })
    if (marca == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou o id correto." })

    if (update == undefined || marcaUpdate == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou os dados da forma adquada" })

    else {
        for (let key in marca) {
            update[key] = update[key] || marca[key]
        }

        marcasJson.splice(marcasJson.indexOf(marca), 1, update)
        
        return response.status(200).send({ mensagem: 'atualizado com sucesso!', update })
    }
}


const replaceByTitle = (request, response) => {
    let marcaUpdate = inputData(request.body);
    let marca = marcasJson.find(marca => marca.nome == request.query.nome)
    let update = integrityJson(marcasJson, marcaUpdate)

    if (marcaUpdate == null)
        return response.status(400).send({ mensagem: "Por favor, enviar um json como body." })
    if (marca == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou o nome correto." })

    if (update == undefined || marcaUpdate == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou os dados da forma adquada" })

    else {
        for (let key in marca) {
            update[key] = update[key] || marca[key]
        }

        marcasJson.splice(marcasJson.indexOf(marca), 1, update)
        return response.status(200).send({ mensagem: 'atualizado com sucesso!', update })
    }
}


const updateById = (request, response) => {
    let marcaUpdate = inputData(request.body);
    let marca = marcasJson.find(marca => marca.id == request.params.id)
    let update = integrityJson(marcasJson, marcaUpdate)

    if (marcaUpdate == null)
        return response.status(400).send({ mensagem: "Por favor, enviar um json como body." })
    if (marca == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou o id correto." })

    if (update == undefined || marcaUpdate == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou os dados da forma adquada" })

    else {
        for (let key in marca) {
            marca[key] = update[key] || marca[key]
        }
        return response.status(200).send({ mensagem: 'atualizado com sucesso!', marca })
    }
}



const updateByTitle = (request, response) => {
    let marcaUpdate = inputData(request.body);
    let marca = marcasJson.find(marca => marca.nome == request.query.nome)
    let update = integrityJson(marcasJson, marcaUpdate)

    if (marcaUpdate == null)
        return response.status(400).send({ mensagem: "Por favor, enviar um json como body." })
    if (marca == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou o nome correto." })

    if (update == undefined || marcaUpdate == undefined)
        return response.status(400).send({ mensagem: "Por favor, verificar se enviou os dados da forma adquada" })

    else {
        for (let key in marca) {
            marca[key] = update[key] || marca[key]
        }
        return response.status(200).send({ mensagem: 'atualizado com sucesso!', marca })
    }
}




module.exports = {

    getAll,
    getByName,
    getVegans,
    getVegansOptions,
    getCrueltyFree,
    getCrueltyFreeAndVegan,
    add,
    deleteByName,
    deleteById,
    getById,
    replaceById,
    replaceByTitle,
    updateById,
    updateByTitle

}