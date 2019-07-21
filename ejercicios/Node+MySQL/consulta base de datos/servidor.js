var express = require('express');
var bodyParser = require('body-parser');
var buscadorControlador = require('./controladores/buscadorControlador');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/nombres', buscadorControlador.buscarNombres);
app.get('/nombres/:id', buscadorControlador.buscarNombre);

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});