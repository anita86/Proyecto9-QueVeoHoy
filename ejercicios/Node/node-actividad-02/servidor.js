var express = require('express');
var bodyParser = require('body-parser');

var porcentajesControlador = require('./controladores/porcentajesControlador');


var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/porcentaje', porcentajesControlador.calcular);


var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});