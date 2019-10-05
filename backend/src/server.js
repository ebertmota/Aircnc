const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

//express é um micro framework dentro do Node para facilitar o desenvolvimento

const app = express();
const server = http.Server(app);
const io = socketio(server); //para enviar ou receber mensagens do mobile/front


mongoose.connect('mongodb+srv://oministack:oministack@oministack-cmmdx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});


app.use((request,response, next) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
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

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

// (ROTAS POST VC NAO CONSEGUE EXECUTAR NO BROWSER)
// para isso que serve o Insomnia 


//porta de acesso a aplicação
server.listen(3333);