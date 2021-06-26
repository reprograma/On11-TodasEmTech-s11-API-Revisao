# Brazil Kino API
Essa aplicação foi desenvolvida para catalogar cinemas e festivais acessíveis, com preço popular ou gratuito no território brasileiro.

## Exemplos de Request e Response

### Recursos

  - [GET /](#get)
  - [GET /cinemas](#get-cinemas)
  - [GET /cinemas/{id}](#get-cinemasid)
  - [GET /cinemas/?estado={estado}](#get-cinemasestadoestado)
  - [GET /cinemas/?estado={estado}&cidade={cidade}](#get-cinemasestadoestadocidadecidade)
  - [GET /cinemas/?estado={estado}&cidade={cidade}&bairro={bairro}](#get-cinemasestadoestadocidadecidadebairrobairro)
  - [POST /cinemas/cadastrar](#post-cinemascadastrar)
  - [PUT /cinemas/substituir/{id}](#put-cinemassubstituirid)
  - [PATCH /cinemas/atualizar/{id}](#patch-cinemasatualizarid)
  - [PATCH /cinemas/like/{id}](#patch-cinemaslikeid)
  - [PATCH /cinemas/dislike/{id}](#patch-cinemasdislikeid)
  - [DELETE /cinemas/deletar/{id}](#delete-cinemasdeletarid)

### GET /
Responde a apresentação:

    'title': 'Brazil Kino API',
    'version': '1.0.0',
    'message': 'Boas-vindas!'

### GET /cinemas
Lista todos os cinemas cadastrado, respondendo:

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
      "estado": "SP"
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
      "estado": "SP"
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
      "estado": "BA"
    }

### GET /cinemas/{id}
Busca cinema por id.

Pedido:


    GET /cinemas/1

Resposta:

    {
      "likes": 12,
      "id": 1,
      "nome": "Cine Passeio",
      "site": "http://www.cinepasseio.org",
      "logradouro": "Rua Riachuelo",
      "numero": "410",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "pr"
    }  

### GET /cinemas/?estado={estado}
Lista todos os cinemas por estado.

Pedido:

    GET /cinemas/?estado=sp

Resposta:

    {
      "likes": 8,
      "id": 2,
      "nome": "CineSesc",
      "site": "https://www.sescsp.org.br/unidades/2_CINESESC/",
      "logradouro": "Rua Augusta",
      "numero": "2075",
      "bairro": "Cerqueira César",
      "cidade": "São Paulo",
      "estado": "SP"
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
      "estado": "SP"
    }

### GET /cinemas/?estado={estado}&cidade={cidade}
Lista todos os cinemas por cidade.

Pedido:

    GET /cinemas/?estado=sp&cidade=são paulo

Resposta:

    {
      "likes": 10,
      "id": 4,
      "nome": "Espaço Itaú de Cinema - Salvador",
      "site": "https://www.itaucinemas.com.br/pag/salvador-glauber-rocha",
      "logradouro": "Praça Castro Alves",
      "numero": "s/n",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "BA"
    }

### GET /cinemas/?estado={estado}&cidade={cidade}&bairro={bairro}
Lista todos os cinemas por bairro.

Pedido:

    GET /cinemas/?estado=sp&cidade=são paulo&bairro=consolação

Resposta:
    
    {
      "likes": 8,
      "id": 2,
      "nome": "Espaço Itaú de Cinema - Frei Caneca",
      "site": "https://www.sescsp.org.br/unidades/2_CINESESC/",
      "logradouro": "Rua Frei Caneca",
      "numero": "569",
      "bairro": "Consolação",
      "cidade": "São Paulo",
      "estado": "SP"
    }

### POST /cinemas/cadastrar
Cadastra um cinema.

Pedido:

    POST /cinemas/cadastrar

    {
      "nome": "Cinema sem nome",
      "site": "n/a",
      "logradouro": "n/a",
      "numero": "n/a",
      "bairro": "n/a",
      "cidade": "n/a",
      "estado": "n/a"
    }

Resposta:

    {
      "likes": 0,
      "id": 5,
      "nome": "Cinema sem nome",
      "site": "n/a",
      "logradouro": "n/a",
      "numero": "n/a",
      "bairro": "n/a",
      "cidade": "n/a",
      "estado": "n/a"
    }

### PUT /cinemas/substituir/{id}
Altera o cadastro de um cinema.

Pedido:
    
    PUT /cinemas/substituir/2

    {
      "nome": "Cinema sem nome",
      "site": "n/a",
      "logradouro": "n/a",
      "numero": "n/a",
      "bairro": "n/a",
      "cidade": "n/a",
      "estado": "n/a"
    }

Resposta:

    {
      "likes": 8,
      "id": 2,
      "nome": "Cinema sem nome",
      "site": "n/a",
      "logradouro": "n/a",
      "numero": "n/a",
      "bairro": "n/a",
      "cidade": "n/a",
      "estado": "n/a"
    }

### PATCH /cinemas/atualizar/{id}
Atualiza o endereço de cinema cadastrado.

Pedido:
    
    PATCH /cinemas/atualizar/2

    {
      "nome": "Cinema sem nome",
      "site": "n/a"
    }

Resposta:

    {
      "likes": 8,
      "id": 2,
      "nome": "Cinema sem nome",
      "site": "n/a",
      "logradouro": "Rua Augusta",
      "numero": "2075",
      "bairro": "Cerqueira César",
      "cidade": "São Paulo",
      "estado": "SP"
    }

### PATCH /cinemas/like/{id}
Adiciona like em um cinema.

Pedido:
    
    PATCH /cinemas/like/1

Resposta:

    {
      "likes": 13,
      "id": 1,
      "nome": "Cine Passeio",
      "site": "http://www.cinepasseio.org",
      "logradouro": "Rua Riachuelo",
      "numero": "410",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "PR"
    }

### PATCH /cinemas/dislike/{id}
Adiciona dislike em um cinema.

Pedido:
    
    PATCH /cinemas/like/1

Resposta:

    {
      "likes": 11,
      "id": 1,
      "nome": "Cine Passeio",
      "site": "http://www.cinepasseio.org",
      "logradouro": "Rua Riachuelo",
      "numero": "410",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "PR"
    }

### DELETE /cinemas/deletar/{id}
Deleta um cinema.

Pedido:
    
    DELETE /cinemas/deletar/4

Resposta:

    {
      "Mensagem": "Cinema Espaço Itaú de Cinema - Salvador deletado."
    }