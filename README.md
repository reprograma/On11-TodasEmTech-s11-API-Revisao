# API cruelty free BR

## Autoras:  Agnes Galvão e Beatriz Ramerindo

## Versão: 1.0.0

# [GET] "/"

apresentação da API

# 

# [GET] "/marcas"

retorna todas as marcas

# [GET] " /marcas/veganas "

retorna todas as marcas veganas

# [GET] " /marcas/opcoesVeganas "

retorna todas as marcas veganas que possuem alguns produtos veganos

# [GET] " /marcas/crueltyFree "

retorna todas as marcas que maltratam os bichinhos

# [GET] " /marcas/crueltyFreeAndVegan "

retorna todas as marcas que maltratam os bichinhos e sao veganas

# [GET] " /marcas/{id} "

## Requirido:  Path Params

retorna uma marca com id escolhido

ex: /marcas/1

# [GET] " /marcas/nome "

## Requirido:  Query Parametros

### [KEY]nome    [VALUE]string

retorna  uma marca pelo nome

ex: /marcas/nome?nome=exemplo

# [POST] " /marcas/add "

## Requirido:  Body Parse

### body {

"nome": nomeMarca, 

"id":  gerado automaticamente, 

"vegana": Vegana, 

"crueltyFree": crueltyfree

}

retorna  a marca criada

# [DELETE] " /marcas/{id} "

## Requirido:  Path Params

deleta uma marca com id escolhido

ex: /marcas/1

retorna a marca deletada

# [PUT] " /marcas/title"

## Requirido:  Body Parse  e Query Parametros

## *Um json com ao menos  1 *key* e um *value* válido.

Exemplo

### [KEY]nome  [VALUE]string

### body {

"nome": nomeMarca, 

"id":  nao pode ser alterado, 

"vegana": Vegana, 

"crueltyFree": crueltyfree

}

ex: /marcas/title?nome=exemplo

retorna  a marca atualizada

# [PUT] " /marcas/{id}"

## Requirido:  Body Parse  e Path Parametros

## *Um json com ao menos  1 *key* e um *value* válido.

Exemplo

### [KEY]nome  [VALUE]string

### body {

"nome": nomeMarca, 

"id":  nao pode ser alterado, 

"vegana": Vegana, 

"crueltyFree": crueltyfree

}

ex: /marcas/1

retorna  a marca atualizada

# [PATCH] " /marcas/title"

## Requirido:  Body Parse  e Query Parametros

## *Um json com ao menos  1 *key* e um *value* válido.

Exemplo

### [KEY]nome  [VALUE]string

### body {

"nome": nomeMarca, 

"id":  nao pode ser alterado, 

"vegana": Vegana, 

"crueltyFree": crueltyfree

}

ex: /marcas/title?nome=exemplo

retorna  a marca atualizada

# [PATCH] " /marcas/{id}"

## Requirido:  Body Parse  e Path Parametros

## *Um json com ao menos  1 *key* e um *value* válido.

Exemplo

### [KEY]nome  [VALUE]string

### body {

"nome": nomeMarca, 

"id":  nao pode ser alterado, 

"vegana": Vegana, 

"crueltyFree": crueltyfree

}

ex: /marcas/1

retorna  a marca atualizada
