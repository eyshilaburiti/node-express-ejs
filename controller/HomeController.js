//FUNÇÕES DAS ROTAS

class HomeController{
    //Funções
    index(req, res){
        res.render("pages/index");
    }

    cadastrar(req, res){
        res.render("pages/cadastro");
    }
}

//Exportar o HomeController
module.exports = new HomeController();