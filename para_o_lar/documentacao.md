### Estabelecimentos - (com opções Vegan, Vegetarina, sem glúten, leite(APLV), Low Carb e adoçadas com frutas)

### Cozinha saudável e inclusiva

[GET] "/"
- retornar a apresentação da API

[GET]"/estabelecimentos"
- retorna todos os estabelecimentos

[GET]"/estabelecimentos/:id"
- retorna um estabelecimento por id

[POST]"/estabelecimentos/cadastrar"
- cadastra um novo estabelecimento, através do modelo jason descrito abaixo;

{
    "id": "String gerada através da Funcão alocada no database",
    "nome": "String",
    "site": "String",
    "categoria": "String",
    "especialidade": "String",
    "logradouro": "String",
    "numero": number,
    "bairro": "String",
    "cidade": "String",
    "estado": "String"
}

[PUT]"/estabelecimentos/:id"
- retorna a atualização de todos os dados do estabelecimento

[PATCH]"/estabelecimentos/:id"
- retorna a atualização de um dado específico do estabelecimento

[DELETE]"/estabelecimentos/:id"
- deleta um estabelecimento por id