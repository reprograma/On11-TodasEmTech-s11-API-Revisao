const dataBase = {
  cinemas: [
    {
      "likes": 12,
      "id": 1,
      "nome": "Cine Passeio",
      "site": "http://www.cinepasseio.org",
      "logradouro": "Rua Riachuelo",
      "numero": "410",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "PR"
    },
    {
      "likes": 8,
      "id": 2,
      "nome": "CineSesc",
      "site": "https://www.sescsp.org.br/unidades/2_CINESESC/",
      "logradouro": "Rua Augusta",
      "numero": "2075",
      "bairro": "Cerqueira César",
      "cidade": "São Paulo",
      "estado": "SP",
    },
    {
      "likes": 8,
      "id": 3,
      "nome": "Espaço Itaú de Cinema - Frei Caneca",
      "site": "https://www.sescsp.org.br/unidades/2_CINESESC/",
      "logradouro": "Rua Frei Caneca",
      "numero": "569",
      "bairro": "Consolação",
      "cidade": "São Paulo",
      "estado": "SP",
    },
    {
      "likes": 10,
      "id": 4,
      "nome": "Espaço Itaú de Cinema - Salvador",
      "site": "https://www.itaucinemas.com.br/pag/salvador-glauber-rocha",
      "logradouro": "Praça Castro Alves",
      "numero": "s/n",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "BA",
    }
  ],

  novoIdCinema: function () {
    let id = 0;
    dataBase.cinemas.forEach(cinema => {
      if (cinema.id > id) {
        id = cinema.id;
      }
    });

    id = id + 1;

    return id;
  },
  findCinema: function (id) {
    let come, a = 0;
    
    dataBase.cinemas.forEach(cinema => {
      if (cinema.id > id) {
        id = cinema.id
      }
    });
    

    id = id + 1;

    return id
  }
}

module.exports = dataBase;



