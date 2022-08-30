// FUNÇÃO DE AUTENTICAÇÃO

const auth = (req, res, next) => {
    // Verifica se a seção está logada
    if (req.session.logado){
        //Continua
        next();
    }
    else{
        //Redireciona para a página de login
        return res.redirect('/login');
    }
}

// Exportar função
module.exports = auth;