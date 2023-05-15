# PROJETO ATUALIZADOR DE PREÇOS - PROCESSO SELETIVO SHOPPER
Projeto criado utilizando React.JS, Docker, Docker Compose, MySQL e Node.JS 

<br/>

## Informações

Há dois diretórios disponíveis: back-end e front-end

<br/>

# Back-end

## Scripts

No diretório do projeto, rode o docker compose:

### `docker-compose up -d`

<br/>

Confira se há dois containeres rodando (back-end e MySQL):

### `docker ps`

<br/>

Entre no terminal do container Node:

### `docker exec -it shopper_container sh`

<br/>

Instale as dependências:

### `npm i`

<br/>

Rodando a aplicação:

### `npm run dev`
Aplicação rodará na porta 3000

<br/>

Banco de dados

Há um script (createDatabase.sql) que vai popular o banco de dados com os dados iniciais necessários

<br/>

<br/>

# Front-end

## Scripts

Na raiz do diretório front-end, instale as dependências:

### `npm i`

<br/>

A aplicação rodará na porta 3001
