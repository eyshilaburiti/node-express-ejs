// GERENCIA DA PÁGINA & SERVIDOR

// Importar & Instanciar o express
const express = require('express');
const app = express();

// Definir a ferramenta do projeto ⇨ EJS
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

// Importar as rotas & configurar
const routers = require('./routers/routers');
app.use(routers);

// Definir o hostname & a porta de acesso
const hostname = 'localhost';
const port = 3000;

//Iniciar Servidor
app.listen(port, () => {
    console.log(`Servidor iniciado em http://${hostname}:${port}`);
});