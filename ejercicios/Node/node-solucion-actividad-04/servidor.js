var express = require('express');
var bodyParser = require('body-parser');
var controladorPorcentaje = require('./controladores/porcentajesControlador');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//declaramos que cuando se llame a la ruta porcentajes, se va a ejecutar la función porcentaje que
//se encuentra en el controladorPorcentaje
app.get('/porcentajes', controladorPorcentaje.porcentaje);

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});