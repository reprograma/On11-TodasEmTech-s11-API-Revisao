const dataBase = {
    estabelecimentos: [
        {
            "likes": 8,
            "id": 1,
            "nome": "Santa Gula",
            "site": "http://www.Santagula.com.br",
            "categoria": "restaurante",
            "logradouro": "Rua Cerqueira",
            "numero": 2,
            "bairro": "Lindoia",
            "cidade": "Atibaia",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 2,
            "nome": "Reserva Japi",
            "site": "http://www.revervajapi.com.br",
            "categoria": "hotel",
            "logradouro": "Rua Amarela",
            "numero": 105,
            "bairro": "Juquia",
            "cidade": "Atibaia",
            "estado": "sp",
        },
        {
            "likes": 0,
            "id": 3,
            "nome": "Delicias da Edi",
            "site": "http://www.revervajapi.com.br",
            "categoria": "hotel",
            "logradouro": "Rua Juria",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 4,
            "nome": "Gran Hotel Maria",
            "site": "http://www.GranMaria.com.br",
            "categoria": "hotel",
            "logradouro": "Rua Principal",
            "numero": 105,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 5,
            "nome": "Juma",
            "site": "http://www.juma.com.br",
            "categoria": "restaurante",
            "logradouro": "Rua Principal",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 0,
            "id": 6,
            "nome": "Shopping do Farol",
            "site": "http://www.ShoppingFarol.com.br",
            "categoria": "shopping",
            "logradouro": "Rua Principal",
            "numero": 100,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 1,
            "id": 7,
            "nome": "Maria Massa",
            "site": "http://www.mariamassa.com.br",
            "categoria": "restaurante",
            "logradouro": "Rua Principal",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 1,
            "id": 8,
            "nome": "Cantina da Maria",
            "site": "http://www.cantinadamaria.com.br",
            "categoria": "restaurante",
            "logradouro": "Rua paraiso",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 1,
            "id": 9,
            "nome": "Cantina da Jo",
            "site": "http://www.cantinadajo.com.br",
            "categoria": "restaurante",
            "logradouro": "Rua paraiso",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp"
        },
        {
            "likes": 1,
            "id": 10,
            "nome": "Cantina da Edi",
            "site": "http://www.cantinadaedi.com.br",
            "categoria": "restaurante",
            "logradouro": "Rua paraiso",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Campinas",
            "estado": "sp",
            "__v": 0
        },
        {
            "likes": 1,
            "id": 11,
            "nome": "Shopping Central",
            "site": "http://www.shopping.com.br",
            "categoria": "shopping",
            "logradouro": "Rua paraiso",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Jundiai",
            "estado": "sp"
        },
        {
            "likes": 1,
            "id": 12,
            "nome": "Pousada das Maravilhosas",
            "site": "http://www.pousada.com.br",
            "categoria": "hotel",
            "logradouro": "Rua paraiso",
            "numero": 22,
            "bairro": "Centro",
            "cidade": "Jundiai",
            "estado": "sp"
        }
    ],
    comentarios: [],
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
 

module.exports = dataBase