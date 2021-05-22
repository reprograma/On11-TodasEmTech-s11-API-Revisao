let filtrarPost = (model, id)=>{
    let postFiltrado = model.find(post => post.id == id)
    return postFiltrado
}

module.exports = {
    filtrarPost
}


