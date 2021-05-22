const dataBase = {
    estabelecimentos: [
        {
            "likes": 1,
            "id": 1 ,
            "nome": "TESTE DOAÇÃO",
            "site": "",
            "categoria": "escola",
            "logradouro": "Rua sem fome",
            "numero": 666,
            "bairro": "Paraíso",
            "cidade": "Brasilia",
            "estado": "DF"
        },
        {
            "likes": 0,
            "id": 2,
            "nome": "teste 2",
            "site": "http://www.xofome.com.br",
            "categoria": "escola",
            "logradouro": "Rua Linda",
            "numero": 333,
            "bairro": "Centro",
            "cidade": "Napoli",
            "estado": "RN"
        }
    ],

//o codigo funciona, mas quebra qdo envia info . Será por causa do fs que não foi bem integrado? Aparece sempre um  "Unexpected token" diferente  (: , } etc)

    novoIdEstabelecimento: function() {
        let id = 0
        dataBase.estabelecimentos.forEach(item => {
            if (item.id > id) {
                id = item.id
            }
        });
    
        id = id + 1 
    
        return id
    },
    findEstabelecimento: function(id) {
        let estabelecimento = 0
        dataBase.estabelecimentos.forEach(item => {
            if (item.id > id) {
                id = item.id
            }
        });
    
        id = id + 1 
    
        return id        
    },
}

module.exports = dataBase
   
    

