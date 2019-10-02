const User = require('../models/User');



// metodos dentro do controller

    //INDEX     ->    metodo que retorna uma listagem de Sessão
    //SHOW      ->    listar uma unica sessão
    //STORE     ->    criar uma sessão
    //UPDATE    ->    alterar uma sessão
    //DESTROY   ->    deletar uma sessão

module.exports = {
    async store(request,response) {
        const email = request.body.email;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }
     

        return response.json(user);
    }
};