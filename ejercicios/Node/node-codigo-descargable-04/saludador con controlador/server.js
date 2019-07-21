var express = require('express');
var bodyParser = require('body-parser');
var saludadorController = require('./controllers/saludadorController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/saludar', saludadorController.saludar);

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});