// FUNÇÕES DAS ROTAS DEFINITAS EM [ROUTERS]

// Class Controller
class HomeController{
    //Define o index do Controller
    index(req, res){
        res.render("pages/index");
    }

    login(req, res){
        res.render("pages/login");
    }
}

// Exportar o HomeController
module.exports = new HomeController();