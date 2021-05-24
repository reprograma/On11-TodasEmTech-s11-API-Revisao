const drugstoresJson = require("../models/drugstores.json");
const fs = require("fs");


const addStore = (request, response) => {
    const id =  Math.random().toString(32).substr(2,9)
    const {
        name,
        address,
        city,
        district,
        hormonesAvailable
    } = request.body

    if(name == ""){
        return response.status(400).send({
            message: "Invalid name"
        })
    }
    if(typeof name !== "string" || name.length < 3 || name.length >50){
        return response.status(400).send({
            message: "Name should have at least 3 and no more than 50 characters."
        })
    }
    if(typeof address !== "string" || address == ""){
        return response.status(400).send({
            message: "Invalid Address."
        })
    }
    if(city == "" || city.length <5 || city.length >50){
        return response.status(400).send({
            message: "Invalid city"
        })
    }
    if (typeof district !== "string" || district.length < 5 || district.length >50 || district == ""){
        return response.status(400).send({
            message: "Invalid district."
        })
    }
    if(typeof hormonesAvailable !== "string" || hormonesAvailable == ""){
        return response.status(400).send({
            message: "Invalid hormones request."
        })
    }

    const newStore = { 
        id, 
        name, 
        address, 
        city, 
        district, 
        hormonesAvailable 
    }

    drugstoresJson.push(newStore)

    fs.writeFile("./src/models/drugstores.json", JSON.stringify(drugstoresJson), 'utf8',function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).send(newStore)

};

const getAll = (request, response) => {
    response.status(200).send(drugstoresJson)
};

const getById = (request, response) => {
    const { id } = request.params

    const storeFilter = drugstoresJson.find(store => store.id ==  id)

    if(storeFilter === undefined) {
        return response.status(404).send({
            message: "Id not found."
        })
    }

    response.status(200).send(storeFilter)
};

const deleteStore = (request, response) => {
    const { id } = request.params
    
    const storeFilter = drugstoresJson.find(store => store.id ==  id)

    if(storeFilter === undefined) {
        return response.status(404).send({
            message: "Id not found."
        })
    }

    const index = drugstoresJson.indexOf(storeFilter)

    drugstoresJson.splice (index, 1)

    fs.writeFile("./src/models/drugstores.json", JSON.stringify(drugstoresJson), 'utf8',function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    return response.status(200).json([{
        "message":"Store deleted.",
        drugstoresJson
    }])
        
};

const replaceStore = (request, response) => {
    const { id } = request.params
    
    const storeFilter = drugstoresJson.find(store => store.id ==  id)

    if(storeFilter === undefined) {
        return response.status(404).send({
            message: "Id not found."
        })
    }

    const {
        name,
        address,
        city,
        district,
        hormonesAvailable
    } = request.body

    if(name == ""){
        return response.status(400).send({
            message: "Invalid name"
        })
    }
    if(typeof name !== "string" || name.length < 3 || name.length >50){
        return response.status(400).send({
            message: "Name should have at least 3 and no more than 50 characters."
        })
    }
    if(typeof address !== "string" || address == ""){
        return response.status(400).send({
            message: "Invalid Address."
        })
    }
    if(city == "" || city.length <5 || city.length >50){
        return response.status(400).send({
            message: "Invalid city"
        })
    }
    if (typeof district !== "string" || district.length < 5 || district.length >50 || district == ""){
        return response.status(400).send({
            message: "Invalid district."
        })
    }
    if(typeof hormonesAvailable !== "string" || hormonesAvailable == ""){
        return response.status(400).send({
            message: "Invalid hormones request."
        })
    }


    storeFilter.name = name
    storeFilter.address = address
    storeFilter.city = city
    storeFilter.district = district
    storeFilter.hormonesAvailable = hormonesAvailable

    fs.writeFile("./src/models/drugstores.json", JSON.stringify(drugstoresJson), 'utf8',function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json([{
        "message":"Store replaced.",
        storeFilter
    }])

};

const updateStore = (request, response) => {
    const { id } = request.params
    
    const storeFilter = drugstoresJson.find(store => store.id ==  id)

    if(storeFilter === undefined) {
        return response.status(404).send({
            message: "Id not found."
        })
    }

    const {
        name,
        address,
        city,
        district,
        hormonesAvailable
    } = request.body

    storeFilter.name = name || storeFilter.name 
    storeFilter.address = address || storeFilter.address
    storeFilter.city = city || storeFilter.city
    storeFilter.district = district || storeFilter.district
    storeFilter.hormonesAvailable = hormonesAvailable || storeFilter.hormonesAvailable

    
    fs.writeFile("./src/models/drugstores.json", JSON.stringify(drugstoresJson), 'utf8',function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json([{
        "message":"Store updated.",
        storeFilter
    }])
}

module.exports = {
    addStore,
    getAll,
    getById,
    deleteStore,
    replaceStore,
    updateStore
}
