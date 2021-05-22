let filtrarEstabelecimento = (model, id)=>{
    let estabelecimentoFiltrado = model.find(estabelecimento => estabelecimento.id == id)
    return estabelecimentoFiltrado
}

module.exports ={
    filtrarEstabelecimento
}