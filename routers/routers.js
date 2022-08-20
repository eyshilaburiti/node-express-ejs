// DEFINIÇÃO DAS ROTAS

// Importar & instanciar o Router
const { Router } = require('express');
const routers = new Router();

// Importar o Controller
const Home = require('../controller/HomeController');

// Definição das rotas ⇩

// 01) Rota raíz
routers.get('/', Home.index);

// 02) Rota Login
routers.get('/login', Home.login);

// Exportar as rotas
module.exports = routers;

