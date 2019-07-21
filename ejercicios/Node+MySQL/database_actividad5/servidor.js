var express = require('express');
var bodyParser = require('body-parser');
var cancionesControlador = require('./controladores/cancionesControlador');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/canciones', cancionesControlador.buscarCanciones);
app.get('/canciones/:id', cancionesControlador.buscarCancion);

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});