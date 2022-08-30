//CONTROLE DA SEÇÃO

class SessionController{
    //Método login
    async login(req, res){
        if(req.session.logado){
            //Redireciona para a página principal
            return res.redirect("/");
        }else{
            //Fazer login
            return res.render("pages/login");
        }
    }

    //Método logar
    logar(req, res){
        //Definição de um user
        let user = {
            email: "user@gmail.com",
            password: "user123"
        };

        //Capturando o email e senha da página
        const {email, senha} = req.body;

        //Verifica se o user está correto
        if(!(email === user.email && senha === user.password)){
            //Informa que alguma informação está errada
            console.log("Email ou senha incorretos");
            //Retorna
            return res.render("pages/login");

        }

        //Salva o login
        req.session.logado = true;
        //Redireciona para o index
        return res.redirect("/");
    }

    //Método logout
    logout(req, res){
        //define que o usuário não está mais logado
        req.session.logado = false;
        //Redireciona para login
        return res.redirect('/login');
    }

    listar(req, res){
        if(req.session.logado){
            //Redireciona para a página principal
            return res.render("pages/usuarios");
        }else{
            //Fazer login
            return res.render("pages/login");
        }
    }
}

//Exportar SessionController
module.exports = new SessionController();