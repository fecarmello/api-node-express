var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/users', function(req, res){  
    var obj = req.body;

    console.log(obj.nome);
    console.log(obj.idade);

    res.status(200).send();
});

app.get('/users', function(req, res){
    var dados = [{
        nome: "Felipe",
        idade: 27,
        id: 1
    }]

    console.log('Entrou uma nova requisição.');

    res.send(JSON.stringify(dados));
});

app.get('/users/:id', function(req, res){
    
    var id = req.params.id;    
    switch (id){
        case "1":
            var user = { nome: "Felipe", idade: 27, id: 1 };
            var erro = false;        
            break;
        case "2":
            var user = { nome: "Roberson", idade: 450, id: 2 };
            var erro = false;
            break;
        case "3":
            var user = { nome: "Joaquim", idade: 10, id: 3 };
            var erro = false;
            break;
        default:        
            var user = { error: "Nenhum usuário encontrado!" };
            var erro = true;
            break;
    };
    
    if(erro)
        res.status(204).json(user);
    else
        res.status(200).json(user);
});

var server = app.listen(8000, function (){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Servidor rodando http://%s:%s', host, port);
})