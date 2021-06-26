const models = require('../models/database');

const getAll = (req, res) => {
  const { estado, cidade, bairro } = req.query;
  let data = models.cinemas;

  if (estado) {
    data = data.filter(cinema => {
      return cinema.estado == estado.toUpperCase();
    });
  }

  if (cidade) {
    data = data.filter(cinema => {
      return cinema.cidade == cidade
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ')
        .replace(/Da/g, 'da')
        .replace(/De/g, 'de')
        .replace(/Do/g, 'do');
      });
  }

  if (bairro) {
    data = data.filter(cinema => {
      return cinema.bairro == bairro
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ')
        .replace(/Da/g, 'da')
        .replace(/De/g, 'de')
        .replace(/Do/g, 'do');
    });
  }

  res.status(200).send(data);
}

const getById = (req, res) => {
  const data = models.cinemas;
  const { id } = req.params;

  let found = data.find(cinema => {
    return cinema.id == id;
  });

  if (found == ' ' || found == undefined) {
    res.status(404).send({
      "mensagem": "Cinema não encontrado."
    });
  }

  return res.status(200).send(found);
}

const create = (req, res) => {
  const { likes = 0, id, nome, site, logradouro, numero, bairro, cidade, estado } = req.body;

  if (nome == undefined
    || typeof nome != 'string'
    || nome.length < 5
    || nome.length > 50
  ) {
    return res.status(400).send({
      'Mensagem': 'O nome deve ser uma string maior que 5 e menor que 50 caracteres.'
    });
  }

  const cinema = { likes, id, nome, site, logradouro, numero, bairro, cidade, estado }

  cinema.id = models.novoIdCinema();
  models.cinemas.push(cinema);

  return res.status(201).send(cinema);
}

const replace = (req, res) => {
  const data = models.cinemas;
  const { id } = req.params;

  const found = data.find(cinema => {
    return cinema.id == id;
  });

  if (found == ' ' || found == undefined) {
    res.status(404).send({
      "mensagem": "Cinema não encontrado."
    });
  }

  const { nome, site, logradouro, numero, bairro, cidade, estado } = req.body;

  if (nome == undefined
    || typeof nome != 'string'
    || nome.length < 5
    || nome.length > 50
  ) {
    return res.status(400).send({
      'Mensagem': 'O nome deve ser uma string maior que 5 e menor que 50 caracteres.'
    });
  }

  found.nome = nome;
  found.site = site;
  found.logradouro = logradouro;
  found.numero = numero;
  found.bairro = bairro;
  found.cidade = cidade;
  found.estado = estado;

  return res.status(200).send(found);
}

const update = (req, res) => {
  const data = models.cinemas;
  const { id } = req.params;

  const found = data.find(cinema => {
    return cinema.id == id;
  });

  if (found == ' ' || found == undefined) {
    res.status(404).send({
      "mensagem": "Cinema não encontrado."
    });
  }

  const { nome, site, logradouro, numero, bairro, cidade, estado } = req.body;

  if (nome == undefined
    || typeof nome != 'string'
    || nome.length < 5
    || nome.length > 50
  ) {
    return res.status(400).send({
      'Mensagem': 'O nome deve ser uma string maior que 5 e menor que 50 caracteres.'
    });
  }

  found.nome = nome || found.nome;
  found.site = site || found.site;
  found.logradouro = logradouro || found.logradouro;
  found.numero = numero || found.numero;
  found.bairro = bairro || found.bairro;
  found.cidade = cidade || found.cidade;
  found.estado = estado || found.estado;

  return res.status(200).send(found);
}

const like = (req, res) => {
  const data = models.cinemas;
  const { id } = req.params;

  const found = data.find(cinema => {
    return cinema.id == id;
  });

  if (found == ' ' || found == undefined) {
    res.status(404).send({
      "mensagem": "Cinema não encontrado."
    });
  }

  found.likes += 1;
  return res.status(200).send(found);
}

const dislike = (req, res) => {
  const data = models.cinemas;
  const { id } = req.params;

  const found = data.find(cinema => {
    return cinema.id == id;
  });

  if (found == ' ' || found == undefined) {
    res.status(404).send({
      "mensagem": "Cinema não encontrado."
    });
  }

  found.likes -= 1;

  if (found.likes <= 0) {
    found.likes = 0;
    res.status(400).send({
      "mensagem": "Likes não podem ser negativos."
    });
  }
  
  return res.status(200).send(found);
}

const remove = (req, res) => {
  const data = models.cinemas;
  const { id } = req.params;

  const found = data.find(cinema => {
    return cinema.id == id;
  });

  if (found == ' ' || found == undefined) {
    res.status(404).send({
      "mensagem": "Cinema não encontrado."
    });
  }

  const index = data.indexOf(found);
  data.splice(index, 1);

  return res.status(200).send({
    'Mensagem': `Cinema ${found.nome} deletado.`
  });
}

module.exports = {
  getAll,
  getById,
  create,
  replace,
  update,
  like,
  dislike,
  remove
}