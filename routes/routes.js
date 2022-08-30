//DEFINIÇÃO DAS ROTAS

//Importar e instanciar o router
const { Router } = require("express");
const routes = new Router();

//Importar o HomeController
const Home = require("../controller/HomeController");

//Importar o SessionController
const Session = require("../controller/SessionController");

//Importar a função de autenticação
const auth = require("../middleware/auth")

//Rota 01: raíz
routes.get("/", auth, Home.index);

//Rota 02: login
routes.get("/login", Session.login);

//Rota 03: logar
routes.post("/logar", Session.logar);

//Rota 04: logout
routes.get("/logout", Session.logout);

//Rota 05: cadastro
routes.get("/cadastro", Home.cadastrar);

//Rota 06: usuarios
routes.get("/usuarios", Session.listar);

//Exportar as rotas
module.exports = routes;