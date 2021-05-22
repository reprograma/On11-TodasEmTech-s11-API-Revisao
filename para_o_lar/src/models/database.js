const dataBase = {
    estabelecimentos: [
        {
            "likes": 0,
            "id": 1,
            "nome": "Santa Gula",
            "site": "http://www.santagula.com.br",
            "categoria": "restaurante",
            "especialidade": "Sem glúten",
            "logradouro": "Rua Cerqueira",
            "numero": 2,
            "bairro": "Lindoia",
            "cidade": "Atibaia",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 2,
            "nome": "Delicias da Edi",
            "site": "http://www.deliciasdaedi.com.br",
            "categoria": "confeitaria",
            "especialidade": "Low Carb",
            "logradouro": "Rua Juria",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 3,
            "nome": "Juma",
            "site": "http://www.juma.com.br",
            "categoria": "restaurante",
            "especialidade": "Vegano",
            "logradouro": "Rua Principal",
            "numero": 35,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 4,
            "nome": "Pelicano",
            "site": "http://www.pelicano.com.br",
            "categoria": "cafeteria",
            "especialidade": "Vegetariano",
            "logradouro": "Rua dos patos",
            "numero": 55,
            "bairro": "Centro",
            "cidade": "Recife",
            "estado": "pe"
        }
    ],

    novoIdEstabelecimento: function() {
        let id = 0
        dataBase.estabelecimentos.forEach(item => {
            if (item.id > id) {
                id = item.id
            }
        });
    
        id = id + 1 // getMax +1
    
        return id
    },
    findEstabelecimento: function(id) {
        let estabelecimento = 0
        dataBase.estabelecimentos.forEach(item => {
            if (item.id > id) {
                id = item.id
            }
        });
    
        id = id + 1 // getMax +1
    
        return id        
    },
}
module.exports = dataBase
   
    

