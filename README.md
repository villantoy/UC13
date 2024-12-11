# API de Carros - WebAPI

está é uma API RESTful desenvolvida para o gerenciamento de informações de carri, utilizando **Node.Js** e **Express**. A API permite criar, ler, atualizar e exluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um progeto inicial de CRUD (Creat, Read, Update, Delete), que será expandido no futuro. Este é apenas o escopo inicial.

# Funcionalidades

- **GET /**: Retorna a lista completa de carros
- **GET /:sigla**: Retorna as informações de um carro especifico identificado pela sigla
- **POST /**: Adiciona um novo carro á lista.
- **PUT /:sigla**: Atualiza as informações de um carro especifico, identificado peça sigla.
- **DELETE /sigla**: Remove um carro especifico pela sigla.

## Estrutura do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **validacao.js**: Contém as validações Joi para os dados dos carros.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponiveis.

### Exemplo de Resposta

