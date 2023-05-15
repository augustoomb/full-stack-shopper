# PROJETO ATUALIZADOR DE PREÇOS - PROCESSO SELETIVO SHOPPER

Projeto criado utilizando React.JS, Docker, Docker Compose, MySQL e Node.JS 


## Informações

Há dois diretórios disponíveis: back-end e front-end


# Back-end

## Scripts

No diretório do projeto, rode o docker compose:

### `docker-compose up -d`


Confira se há dois containeres rodando (back-end e MySQL):

### `docker ps`


Entre no terminal do container Node:

### `docker exec -it shopper_container sh`


Instale as dependências:

### `npm i`


Rodando a aplicação:

### `npm run dev`
Aplicação rodará na porta 3000


Banco de dados

Há um script (createDatabase.sql) que vai popular o banco de dados com os dados iniciais necessários


