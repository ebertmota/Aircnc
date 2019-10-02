const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//express é um micro framework dentro do Node para facilitar o desenvolvimento

const app = express();


mongoose.connect('mongodb+srv://oministack:oministack@oministack-cmmdx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//definindo rota do usuario
    //metodos GET,POST,PUT,DELETE
    //  GET => buscar informação no Backend
    //  POST => criar informação no Backend 
    //  PUT => editar uma informação
    //  DELETE => deletar uma informação

//request.query para acessar req params
//request.params acessar route params para PUT e DELETE
//request.body acessa corpo da requisição

app.use(express.json());
app.use(routes);

// (ROTAS POST VC NAO CONSEGUE EXECUTAR NO BROWSER)
// para isso que serve o Insomnia 


//porta de acesso a aplicação
app.listen(3333);