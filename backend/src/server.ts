import express from 'express';



import './database/conection';

const app = express();

app.use(express.json());

// Rota = conjunto
// Recurso = /users

// Métodos HTTP -> GET, POST, PUT, DELETE
// GET = Buscando uma informação (lista item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação 
// Navegador faz req por padrão atraves do GET
// Uso do imsomnia para testar outros tipos de requisicoes

// Parâmetros 
// Query Params: http://localhost:3333/users?search=diego&
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users  



app.listen(3333);

// REQUISICAO / RESPOSTA
// localhost:3333

// Migration -> permite que ao fazer uma alteracao do banco de dados é criado um arquivo com as instruções