

- Devo conseguir ver todos os estabalecimentos;
- Devo conseguir pesquisar os estabelecimentos pelo id;
- Devo conseguir pesquisar os estabelecimentos pelo nome;
- Devo conseguir deletar estabelecimentos;
- Devo conseguir criar um estabelecimento;
- Devo conseguir atualizar os dados dos estabelecimentos;


[GET] "filmes/todos"
getAll que retorna todos os estabelecimentos

[GET] "estabelecimentos/:id" 
getById que retorna o estabelecimento com id específico

[GET] "/estabelecimentos/title"
getByShop que retorna o estabelecimento com o nome específico

[Delete] "/estabelecimentos/:id"
deleteShop que deleta o estabelecimento

[POST] "/estabelecimentos/create"
createShop cria um novo estabelecimento

[PUT] "/estabelecimentos/:id"
replaceShop atualiza os dados do estabelecimento

[PATCH] "/estabelecimentos/update/:id"
updateAnything atualiza qualquer informação do estabelecimento