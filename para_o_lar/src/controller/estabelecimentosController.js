const estabelecimentosJson = require ("../model/estabelecimentos.json")

const getAll = (request, response) =>{
   response.status(200).json(estabelecimentosJson)
}

const getById = (request, response) => {
   const id = request.params.id
   const estabelecimentosFiltrados = estabelecimentosJson.find(estabelecimento => estabelecimentosJson.id == id)
   response.status(200).send(estabelecimentosFiltrados)
}

const create = (request, response) => {
   let nomeRequerido = request.body.nome
   let cidadeRequerido = request.body.cidade
   let bairroRequerido = request.body.estado

   const novoEstabelecimento = {
      "nome": nomeRequerido,
      "bairro": cidadeRequerido,
      "cidade": bairroRequerido,
   }
   estabelecimentosJson.push(novoEstabelecimento)

   response.status(201).json([{
      "mensagem": "Estabelecimento cadastrado",
      novoEstabelecimento
   }])

}

const updateAdress = (request, response) => {
   const id = request.params.id
   let novoEndereço = request.body.bairro
   const estabelecimentosFiltrados = estabelecimentosJson.find(estabelecimento => estabelecimento.id == id)

   estabelecimentosFiltrados.bairro = novoEndereço

   response.status(200).json([{
      "mensagem": "Bairro atualizado com sucesso!",
      postFiltrado
   }])
}

const replaceCadastro = (request, response) => {
   const id = request.params.id
   let cadastroBody = request.body
   const estabelecimentosFiltrados = estabelecimentosJson.find(estabelecimento => estabelecimento.id == id)

   let cadastroAtualizado= {
      "likes": cadastroBody.likes,
      "id": cadastroBody.id,
      "nome": cadastroBody.nome,
      "site": cadastroBody.site,
      "categoria": cadastroBody.categoria,
      "logradouro": cadastroBody.logradouro,
      "numero": cadastroBody.numero,
      "bairro": cadastroBody.bairro,
      "cidade": cadastroBody.cidade,
      "estado": cadastroBody.estado
   }

   const indice = estabelecimentosJson.indexOf(estabelecimentosFiltrados)
   estabelecimentosJson.splice(indice, 1, cadastroAtualizado)

   response.status(200).json([{
      "mensagem": "Cadastro subsitutido com sucesso",
      cadastroAtualizado
   }])


}

const remove = (request, response) =>{
   const id = request.params.id
   const estabelecimentosFiltrados = estabelecimentosJson.find(estabelecimento => estabelecimentosJson.id == id)
   const indice = estabelecimento.indexOf(estabelecimentosFiltrados)

   estabelecimento.splice(indice, 1)

   response.status(200).send(estabelecimentosFiltrados)
}





module.exports = {
   getAll,
   getById,
   remove,
   create,
   updateAdress,
   replaceCadastro
}

