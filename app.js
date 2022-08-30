//GERENCIADOR & SERVIDOR

//Importar e instanciar o express
const express = require("express");
const app = express();

//Definição do template
app.set("view engine", "ejs")

//Importar o session
//npm install express-session
const session = require('express-session');

// Chamando session
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define o Proxy como ativo
app.set('trust proxy', 1);

// Configurando session
app.use(session({
    secret: 'dd188d9e075f189f4a0687c4bd01a7f14ee829d1',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }));

//Importar as rotas
const routes = require("./routes/routes");
app.use(routes);

// Definir o hostname & a porta de acesso
const hostname = 'localhost';
const port = 3333;

//Iniciar Servidor
app.listen(port, () => {
    console.log(`Servidor iniciado em http://${hostname}:${port}`);
});